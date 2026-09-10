import { test, expect } from '@playwright/test';

test.describe('SauceDemo core user flows', () => {
  test('User can manage cart contents before checkout', async ({ page }) => {
    // 1. Open the cart page after adding one or more products
    await page.goto('https://www.saucedemo.com');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();

    await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL(/\/cart\.html$/);
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();

    // 2. Click Continue Shopping
    await page.getByRole('button', { name: 'Continue Shopping' }).click();
    await expect(page).toHaveURL(/\/inventory\.html$/);

    // 3. Add a second item to the cart if needed, then reopen the cart
    await page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('a[data-test="shopping-cart-link"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();

    // 4. Click Checkout
    await page.getByRole('button', { name: 'Checkout' }).click();
    await expect(page).toHaveURL(/\/checkout-step-one\.html$/);
  });
});
