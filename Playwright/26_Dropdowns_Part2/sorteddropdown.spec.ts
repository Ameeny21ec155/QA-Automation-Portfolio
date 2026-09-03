import { test, expect, Locator } from "@playwright/test";

test("Verify dropDown is Sorted", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropDownOptions: Locator = page.locator('#animals>option'); // Already sorted so test passed
    // const dropDownOptions: Locator = page.locator('#colorss>option'); // Not in sorted order so we get error

    const optionsText: string[] =
        (await dropDownOptions.allTextContents()).map(text => text.trim());

    const originalList: string[] = [...optionsText];
    const sortedList: string[] = [...optionsText].sort();

    console.log("Original list:", originalList);
    console.log("Sorted list:", sortedList);

    expect(originalList).toEqual(sortedList);
});