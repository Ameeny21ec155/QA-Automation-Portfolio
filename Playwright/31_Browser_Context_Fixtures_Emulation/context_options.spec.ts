import { test, expect } from "@playwright/test";

test("Context options demo", async ({ browser }) => {

    // Create Browser Context with custom options
    const context = await browser.newContext({

        // 1. Dark Theme
        colorScheme: "dark",

        // 2. Browser Permissions
        permissions: [
            "notifications",
            "geolocation",
            "microphone"
        ],

        // 3. Language
        locale: "en-IN",

        // 4. Time Zone
        timezoneId: "Asia/Kolkata",

        // 5. Viewport Size
        viewport: {
            width: 1280,
            height: 720
        },

        // 6. Fake GPS Location
        geolocation: {
            latitude: 17.3843,
            longitude: 78.4583
        },

        // 7. Ignore HTTPS certificate errors
        ignoreHTTPSErrors:true

    });

    // Create a new page
    const page = await context.newPage();

    // Navigate to Google
    await page.goto("https://www.google.com/");

    // Wait for 5 seconds
    await page.waitForTimeout(5000);

});

test("Page options demo ",async({page})=>{
    // await page.setViewportSize({width:1920, height:1080})
    await page.setViewportSize({width:1, height:1})
    // Navigate to Google
    await page.goto("https://www.google.com/");

    // Wait for 5 seconds
    await page.waitForTimeout(5000);
})