import { test, expect } from '@playwright/test';

// Test cheyalsina data - ila list pedithe okesari 4 tests run avuthayi
const searchItems: string[] = ['laptop', 'Gift card', 'smartphone', 'monitor'];

// Method 1: for...of loop - Idi best method
for (const item of searchItems) {
  test(`search test for ${item}`, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill(item); // search box lo text fill
    await page.locator('input[value="Search"]').click(); // Search button click
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true }); // result check
  });
}

// Method 2: forEach tho - same logic, different style
// searchItems.forEach((item) => {
//   test(`search test for ${item}`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator('#small-searchterms').fill(item);
//     await page.locator('input[value="Search"]').click();
//     await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
//   });
// });

// Method 3: describe tho grouping - Report lo neat ga kanipistadi
test.describe("searching items", async () => {
  for (const item of searchItems) {
    test(`search test for ${item}`, async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/');
      await page.locator('#small-searchterms').fill(item);
      await page.locator('input[value="Search"]').click();
      await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });
    });
  }
});