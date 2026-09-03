import { test, expect } from "@playwright/test";

test.describe("Handle Dialogs", () => {
    test.beforeEach('Navigate to the File Upload page', async ({ page }) => {
    await page.goto("https://sdetqa.vercel.app/autoplay.html");
    await expect(page.getByText('AutoPlay')).toBeVisible();
    });

    // ============================
    // 1. Simple Alert Dialog
    // ============================

    test("Simple dialog", async ({ page }) => {

        page.on("dialog", (dialog) => {

            expect(dialog.type()).toBe("alert");

            expect(dialog.message()).toContain("Simple alert!");

            dialog.accept();
        });

        await page.getByRole("button", {
            name: "Simple"
        }).click();

    });


    // ============================
    // 2. Confirmation Dialog
    // ============================

    test("Confirmation dialog", async ({ page }) => {

        page.on("dialog", (dialog) => {

            expect(dialog.type()).toBe("confirm");

            expect(dialog.message()).toContain("Confirm?");

            dialog.dismiss();
            // dialog.accept();   // To click OK

        });

        await page.getByRole("button", {
            name: "Confirm"
        }).click();

    });


    // ============================
    // 3. Prompt Dialog
    // ============================

    test("Prompt dialog", async ({ page }) => {

        page.on("dialog", (dialog) => {

            if (dialog.type() === "prompt") {

                dialog.accept("Welcome");

            }

            else if (dialog.type() === "alert") {

                dialog.accept();

            }

        });

        await page.getByRole("button", {
            name: "Prompt"
        }).click();

    });

});