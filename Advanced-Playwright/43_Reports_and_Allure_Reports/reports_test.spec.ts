// Reports :-

// list : shows each test step in terminal
// line / dot : short output, good for CI
// html : best for you, opens a visual report in browser
// json / junit : for Jenkins / CI tools
// allure-playwright : advanced report, needs allure installed


import { test, expect } from '@playwright/test';

test.describe('demowebshop Home Page Tests', () => {

  test('@P2 @Regression logotest', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
  });

  test('@P2 @Regression title test', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    expect(await page.title()).toContain("Demo Web Shop");
  });

});

test.describe('demowebshop User Login Tests', () => {

  test('@P1 @Sanity Login test with invalid credentials', async ({ page }) => {

    console.log("This test is expected to fail due to invalid credentials.");

    await test.step('Open Login Page', async () => {
      await page.goto('https://demowebshop.tricentis.com/login');
    });

    await test.step('Enter Login Credentials', async () => {
      await page.fill('#Email', 'invalid@example.com');
      await page.fill('#Password', 'invalidpassword');
    });

    await test.step('Click Login Button', async () => {
      await page.locator("input[value='Log in']").click();
    });

    await test.step('Verify Unsuccessful Login', async () => {
      // Assert user is still on the login page
      await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    });

  });

test('@P1 @Sanity login test with valid credentials', async ({ page }) => {

  await test.step('Open Login Page', async () => {
    await page.goto('https://demowebshop.tricentis.com/login');
  });

  await test.step('Enter Login Credentials', async () => {
    await page.fill('#Email', 'YOUR_EMAIL@example.com');
    await page.fill('#Password', 'YOUR_PASSWORD');
  });

  await test.step('Click Login Button', async () => {
    await page.locator("input[value='Log in']").click();
  });

  await test.step('Verify Successful Login', async () => {
    const logoutLink = page.locator("a[href='/logout']");
    await expect(logoutLink).toBeVisible({ timeout: 10000 });
  });

});

  test.skip('@P2 @Regression demowebshop search test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/login');
  await page.locator("#small-searchterms").fill("laptop"); // fill the text in search box
  await page.locator("input[value='Search']").click(); // click on the button
  await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});

//Failing test
test('@P1 @Sanity demoblaze Login test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
});

});