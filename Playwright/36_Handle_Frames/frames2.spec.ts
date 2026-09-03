import {test ,expect} from '@playwright/test'

test("Nested frames",async({page})=>{

    await page.goto('https://sdetqa.vercel.app/autoplay');

    // page.frameLocator('iframe').nth(0) - deprecated
    // page.frameLocator('iframe').first() -deprecated
    const outFrame=await page.locator('iframe').first().contentFrame()

    //outerframe---> innerFrame ---> input element
    const inputBox=outFrame.frameLocator('iframe').locator("#innerInput");
    await inputBox.fill("Welcome")
    await expect(inputBox).toHaveValue("Welcome")

});