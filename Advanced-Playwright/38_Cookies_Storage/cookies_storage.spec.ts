import { test, expect } from '@playwright/test';

test('Handle Cookies', async ({ page, context }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Get cookies
  const cookies = await context.cookies();
  console.log('Cookies:', cookies);

  // Add cookie
  await context.addCookies([{
    name: 'myTestCookie',
    value: '12345',
    domain: 'demowebshop.tricentis.com',
    path: '/'
  }]);

  // Verify cookie
  const updatedCookies = await context.cookies();
  const myCookie = updatedCookies.find(c => c.name === 'myTestCookie');
  expect(myCookie?.value).toBe('12345');

  // Clear cookies
  await context.clearCookies();
});

test('Handle Local Storage', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  // Set
  await page.evaluate(() => {
    localStorage.setItem('theme', 'dark');
    localStorage.setItem('language', 'en');
  });

  // Get
  const theme = await page.evaluate(() => localStorage.getItem('theme'));
  expect(theme).toBe('dark');

  // Clear
  await page.evaluate(() => localStorage.clear());
});

test('Handle Session Storage', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  await page.evaluate(() => {
    sessionStorage.setItem('formStep', '2');
  });

  const step = await page.evaluate(() => sessionStorage.getItem('formStep'));
  expect(step).toBe('2');

  await page.evaluate(() => sessionStorage.clear());
});