import { test , devices} from "@playwright/test"

// We create our own Emulator
test("Emulator test on iPhone15",async({browser})=>{

    const context=await browser.newContext( {...devices['iPhone 15']} )
    const page=await context.newPage();
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(2500);
});

// We are using Emulator setup from config file.
test("Emulator test on iPhone15 from config file",async({page})=>{
await page.goto('https://www.google.com/');
    await page.waitForTimeout(2500);
    
});
