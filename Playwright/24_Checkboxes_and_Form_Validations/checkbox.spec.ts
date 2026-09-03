import { test, expect } from "@playwright/test";

test("Handle checkboxes", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Select checkbox
    const sundayCheckbox = page.getByLabel("Sunday");

    await sundayCheckbox.check();

    // Verify checkbox is selected
    await expect(sundayCheckbox).toBeChecked();

    // Uncheck checkbox
    await sundayCheckbox.uncheck();

    // Verify checkbox is unchecked
    await expect(sundayCheckbox).not.toBeChecked();
});
