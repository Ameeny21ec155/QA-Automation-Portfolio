/*
CSS (Cascading style sheets)

html + js + css

2 types of css locators:

1. absolute css locator
2. relative css locator

tag with id     tag#id         #id
tag with class  tag.class
tag with any other attribute tag[attribute=value]
tag with class and attribute tag.class[attribute=value]

*/

import{test,expect, Locator} from "@playwright/test"

test("Verify css locators",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //tag#id

    // const searchbox:Locator = page.locator("input#small-searchterms");
    // await searchbox.fill("T-Shirts");

    // await expect(page.locator("input#small-searchterms")).toBeVisible();
    // await page.locator("input#small-searchterms").fill("T-shirts");

    // await page.locator("#small-searchterms").fill("T-shirts");

    // await page.locator(".search-box-text").fill("T-shirts");

    //tag[attribute=value]
    // await  page.locator("input[name=q]").fill("T-shirts");
    // await  page.locator("[name=q]").fill("T-shirts");

    //tag.class[attribute=value]
    // await page.locator("input.search-box-text[value='Search store']").fill("T-shirts");
     await page.locator(".search-box-text[value='Search store']").fill("T-shirts");


   // await page.waitForTimeout(5000);


})