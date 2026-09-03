/*
A Browser Context in Playwright represents an isolated browser session.
Each context has its own cookies, local storage, session storage, and cache. This allows you to simulate multiple users within the same browser instance.

Browser ---> Contexts ---->pages

Browsers --->chromium, firefox, webkit

Contexts--->we can have multiple contexts for multiple users/apps for the same browser. provide a way to operate multiple independent browser sessions.

page--->New Tab, Window, Popup

Why Browser Context?
Browser Context provides session isolation without launching multiple browsers.

Browser
|
|---Context 1
|    |
|    |---Page 1
|
|---Context 2
|    |
|    |---Page 2
|
|---Context 3
     |
     |---Page 3


*/

import {test , chromium} from "@playwright/test"

test("Browser context demo",async()=>{

    // Browser ---> Context ---> Page

    // Browser

    const browser = await chromium.launch();

    // Create context 1

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    //create pages
    const context1_page = await context1.newPage();
    const context2_page = await context2.newPage();

    await context1_page.goto("https://www.saucedemo.com/");
    await context2_page.goto("https://www.saucedemo.com/"); 

    await context1_page.waitForTimeout(3000);
    await context2_page.waitForTimeout(3000);

    await context1_page.close();
    await context2_page.close();

    await browser.close();

}) 