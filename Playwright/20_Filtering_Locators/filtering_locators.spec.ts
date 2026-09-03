import { test, expect } from "@playwright/test";

test.describe("Filtering Locators", () => {

    test("Filter locator using hasText", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        // Locate all product items
        const products = page.locator(".inventory_item");

        // Filter product using text
        const backpack = products.filter({
            hasText: "Sauce Labs Backpack"
        });

        await expect(backpack).toBeVisible();

        console.log("Backpack product is available");
    });


    test("Filter locator using has", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        const products = page.locator(".inventory_item");

        // Locate product which contains a specific button
        const backpack = products.filter({
            has: page.getByRole("button", {
                name: "Add to cart"
            })
        });

        await expect(backpack.first()).toBeVisible();

        console.log("Product containing Add to cart button found");
    });


    test("Filter and perform action", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        const products = page.locator(".inventory_item");

        // Find specific product
        const backpack = products.filter({
            hasText: "Sauce Labs Backpack"
        });

        // Click Add to cart only inside that product
        await backpack.getByRole("button", {
            name: "Add to cart"
        }).click();

        console.log("Backpack added to cart");
    });


    test("Count filtered locators", async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        const products = page.locator(".inventory_item");

        const backpack = products.filter({
            hasText: "Sauce Labs Backpack"
        });

        console.log("Filtered product count:", await backpack.count());

        await expect(backpack).toHaveCount(1);
    });

});