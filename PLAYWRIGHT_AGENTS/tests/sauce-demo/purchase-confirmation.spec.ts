import { test, expect } from '@playwright/test';

test.describe('SauceDemo core user flows', () => {
  test('User can complete the purchase and confirm the order', async ({ page }) => {
    // 1. From the Checkout: Overview page, click Finish
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
    await page.locator('input[data-test="continue"]').click();
    await page.locator('button[data-test="finish"]').click();

    // 2. Verify the confirmation page content
    await expect(page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(page.getByText('Checkout: Complete!')).toBeVisible();
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')).toBeVisible();

    // 3. Click Back Home
    await page.getByRole('button', { name: 'Back Home' }).click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.shopping_cart_badge')).toBeHidden();
  });
});
