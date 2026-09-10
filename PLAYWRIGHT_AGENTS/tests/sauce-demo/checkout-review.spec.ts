import { test, expect } from '@playwright/test';

test.describe('SauceDemo core user flows', () => {
  test('User can enter checkout information and review the order', async ({ page }) => {
    // 1. On the Checkout: Your Information page, enter a valid first name, last name, and postal code
    await page.goto('https://www.saucedemo.com');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();

    await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a[data-test="shopping-cart-link"]').click();
    await page.getByRole('button', { name: 'Checkout' }).click();

    await page.locator('input[data-test="firstName"]').fill('Test');
    await page.locator('input[data-test="lastName"]').fill('User');
    await page.locator('input[data-test="postalCode"]').fill('12345');

    // 2. Click Continue
    await page.locator('input[data-test="continue"]').click();

    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
    await expect(page.getByText('Checkout: Overview')).toBeVisible();

    // 3. Review the item list, item total, tax, and total amount
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Item total: $29.99')).toBeVisible();
    await expect(page.getByText('Tax: $2.40')).toBeVisible();
    await expect(page.getByText('Total: $32.39')).toBeVisible();

    // 4. Click Cancel or proceed to finish based on the intended path
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });
});
