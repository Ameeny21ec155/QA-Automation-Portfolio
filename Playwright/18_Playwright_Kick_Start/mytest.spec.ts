import {test,expect} from "@playwright/test";

// syntax:
/*

test("title" ,()=>{

//steps...


})

*/

// Fixture - global variable : page , browser

test("Verify page title",async({page})=>{
    await page.goto("https://google.com");

    let title:string =await page.title();
    console.log("Title:",title);

   await expect(page).toHaveTitle("Google");
})