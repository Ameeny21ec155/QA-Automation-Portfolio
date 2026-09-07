import { test, expect } from '@playwright/test';

test.describe('Playwright Assertions', () => {

  test('toHaveText vs toContainText', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    const welcomeMsg = page.locator('.topic-html-content-header');
    await expect(welcomeMsg).toHaveText('Welcome to our store');
    await expect(welcomeMsg).toContainText('Welcome');
  });

  test('toHaveText vs toHaveValue - FIXED', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    const heading = page.locator('.page-title h1');
    await expect(heading).toHaveText('Welcome, Please Sign In!');

    const emailInput = page.locator('#Email');
    await emailInput.fill('admin@example.com');
    await expect(emailInput).toHaveValue('admin@example.com');
    
    // FIX 1: Demowebshop lo dropdown value URL la untundi, "5" kaadu
    await page.goto('https://demowebshop.tricentis.com/books');
    const sortBy = page.locator('#products-orderby');
    await sortBy.selectOption('Name: A to Z');
    // So we check URL instead of value
    await expect(page).toHaveURL(/orderby=5/); 
  });

  test('Visibility & State Assertions', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    const loginBtn = page.locator('input[value="Log in"]');
    const email = page.locator('#Email');
    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toBeEnabled();
    await expect(email).toBeEditable();
  });

  test('Count & Class Assertions - FIXED', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/books');
    const products = page.locator('.product-item');
    // FIX 2: Ippudu site lo 8 kaadu, 6 products unnayi, so 6 ki marcham
    await expect(products).toHaveCount(6); 
    
    const firstProduct = products.first();
    await expect(firstProduct).toHaveClass(/product-item/);
  });

  test('Soft Assertion - FIXED', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect.soft(page.locator('.topic-html-content-header')).toHaveText('Welcome to our store');
    console.log('This line will execute even if above soft assert fails');
    
    // FIX 3: h2 7 unnayi, so strict mode error. first() add chesam
    await expect(page.locator('h2').first()).toContainText('Welcome');
  });

  test('Negating Assertions with .not', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/login');
    await expect(page.locator('.validation-summary-errors')).not.toBeVisible();
  });
});