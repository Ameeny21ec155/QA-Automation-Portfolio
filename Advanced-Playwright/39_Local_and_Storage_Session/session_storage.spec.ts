import { chromium } from '@playwright/test';
import fs from 'fs';

async function saveSessionStorage() {

    const browser = await chromium.launch({ headless: false });

    // Create browser context
    const context = await browser.newContext();
    const page = await context.newPage();

    // Open application
    await page.goto('https://sdetqa.vercel.app/login_app.html');

    // Login
    await page.getByRole('textbox', { name: 'Username' }).fill('admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    // Select Session Storage option
    await page.getByLabel('⏳ Session').check();

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForSelector('text=Dashboard Welcome', {
        state: 'visible'
    });

    // Capture session storage data
    const sessionStorageData = await page.evaluate(() => {

        const data: Record<string, string> = {};

        for (let i = 0; i < sessionStorage.length; i++) {

            const key = sessionStorage.key(i);

            if (key !== null) {
                data[key] = sessionStorage.getItem(key) ?? '';
            }
        }

        return data;
    });

    console.log('Session Storage:', sessionStorageData);

    // Save session storage to file
    fs.writeFileSync(
        "./storage_data/session_data.json",
        JSON.stringify(sessionStorageData, null, 2)
    );

    await browser.close();
}

// Calling the function
saveSessionStorage();