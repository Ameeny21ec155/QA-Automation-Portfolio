import { test, expect } from '@playwright/test';

test.describe('SauceDemo core user flows', () => {
  test('User can browse products and add an item to the cart', async ({ page }) => {
    // 1. Start from the inventory page after login
    await page.goto('https://www.saucedemo.com');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();

    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // 2. Review the visible product list and choose one item, such as Sauce Labs Backpack
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // 3. Click Add to cart on the chosen product
    await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('button[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 4. Open the shopping cart from the cart icon/link
    await page.locator('a[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL(/\/cart\.html$/);
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('QTY')).toBeVisible();
  });
});
