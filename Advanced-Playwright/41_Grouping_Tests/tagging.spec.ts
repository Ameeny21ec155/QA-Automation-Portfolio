/* 
1.Run all sanity tests
npx playwright test tagging.spec.ts --grep "@sanity" 

2.Run all regression tests
npx playwright test tagging.spec.ts --grep "@regression" 

3. Run test that belong to both sanity and regression
npx playwright test tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=   )  -> Positive lookahead
.*       -> Any number of characters
@sanity  -> Followed by @sanity

4. Run tests that belong to either sanity OR regression
npx playwright test tagging.spec.ts --grep "@sanity | @regression"

5. Run sanity tests that are NOT regression tests
npx playwright test tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
*/

import { test, expect } from '@playwright/test';

// Approach1
test('@sanity @regression Check title of the home page', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

//Approach 2
test('Check url of the home page', {tag:'@sanity'}, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveURL(/google/);
});

test('Check navigation to Store page', { tag: '@regression' }, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
});

test('Check Popular on the Google Store', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Popular on the Google Store'")).toBeVisible();
});

