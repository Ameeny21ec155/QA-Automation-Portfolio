import { test, expect } from '@playwright/test';

test.describe('Playwright Auto-Waiting & Waits', () => {

  test('Auto-Waiting is default - No manual wait needed', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    
    // Playwright auto-waits for element to be visible, enabled, stable
    await page.locator('#Email').fill('test@test.com'); 
    await page.locator('#Password').fill('password123');
    await page.locator('input[value="Log in"]').click();
    
    // Auto-retrying assertion - waits 5 sec automatically
    await expect(page.locator('.validation-summary-errors')).toBeVisible();
  });

  test('locator.waitFor() vs waitForSelector()', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    // MODERN & RECOMMENDED ✅
    await page.locator('.product-grid').waitFor({ state: 'visible' });
    
    // LEGACY - Avoid ❌ - returns ElementHandle, flaky
    // const element = await page.waitForSelector('.product-grid', { state: 'visible' });
  });

  test('waitForLoadState - domcontentloaded, load, networkidle', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    // Fastest - HTML loaded
    await page.waitForLoadState('domcontentloaded');
    
    // Full page - HTML+CSS+Images - good for screenshots
    await page.waitForLoadState('load');
    
    // Avoid this - use only if needed for SPA
    // await page.waitForLoadState('networkidle');
  });

  test('waitForURL - For navigation', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    
    await page.locator('#Email').fill('test@test.com');
    await page.locator('#Password').fill('test');
    await page.locator('input[value="Log in"]').click();
    
    // Wait until URL changes after login attempt
    // await page.waitForURL('**/login'); 
    await expect(page).toHaveURL(/login/); // Better way
  });

  test('waitForEvent - Popup and Download', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    // Example for Popup - if site has external link
    // const popupPromise = page.waitForEvent('popup');
    // await page.getByText('Open Window').click();
    // const popup = await popupPromise;
    // await expect(popup).toHaveTitle(/New Page/);

    // Example for Download
    // const downloadPromise = page.waitForEvent('download');
    // await page.getByText('Download').click();
    // const download = await downloadPromise;
    // console.log(await download.suggestedFilename());
  });

  test('force click - Skip actionability checks', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    
    // Only when element is covered or not stable
    await page.locator('.header-logo img').click({ force: true });
  });

  test('NEVER use waitForTimeout in real tests', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    
    // BAD ❌ - Don't do this in framework
    // await page.waitForTimeout(3000);
    
    // GOOD ✅ - Wait for element
    await expect(page.locator('.topic-html-content-header')).toBeVisible();
  });
});