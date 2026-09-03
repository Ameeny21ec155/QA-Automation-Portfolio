import { test, expect } from "@playwright/test";

test("Handle form validations", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enter name
    await page.getByPlaceholder("Enter Name").fill("Ameen");

    // Enter email
    await page.getByPlaceholder("Enter EMail").fill("ameen@gmail.com");

    // Enter phone number
    await page.getByPlaceholder("Enter Phone").fill("9876543210");

    // Verify entered values
    await expect(page.getByPlaceholder("Enter Name"))
        .toHaveValue("Ameen");

    await expect(page.getByPlaceholder("Enter EMail"))
        .toHaveValue("ameen@gmail.com");

    await expect(page.getByPlaceholder("Enter Phone"))
        .toHaveValue("9876543210");
});
