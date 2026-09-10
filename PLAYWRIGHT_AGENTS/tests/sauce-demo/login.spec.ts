import { test, expect } from '@playwright/test';

test.describe('SauceDemo core user flows', () => {
  test('User can log in and view the product catalog', async ({ page }) => {
    // 1. Open the SauceDemo homepage at https://www.saucedemo.com
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle(/Swag Labs/);

    // 2. Enter standard_user in the username field and secret_sauce in the password field
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');

    // 3. Click the Login button
    await page.locator('input[data-test="login-button"]').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  });
});
