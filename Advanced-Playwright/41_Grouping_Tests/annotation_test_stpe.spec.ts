import { test, expect } from '@playwright/test';

test('Login without test.step()', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click("#login-button");

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
});

test('Login using test.step()', async ({ page }) => {

    await test.step('Open Login Page', async () => {
        await page.goto('https://www.saucedemo.com/');
    });

    await test.step('Enter Login Credentials', async () => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
    });

    await test.step('Click Login Button', async () => {
        await page.click('#login-button');
    });

    await test.step('Verify Successful Login', async () => {
        await expect(page).toHaveURL(/inventory/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

});

