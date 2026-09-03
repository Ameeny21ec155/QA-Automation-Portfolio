import {test,expect, Locator} from "@playwright/test"

test("Practice Built-in Locators",async({page})=>{

    // 1. getByRole()

    await page.goto("file:///C:/Users/shaik/Downloads/app%20(1).html");

    // getByRole() is used for - <button> , <a> , <h1> , <select> , <input type="checkbox"> , <input type="radio">

    // heading 

    const heading:Locator= page.getByRole("heading",{name:"Playwright Locators Demonstration"});  // declaring varaible with combination of const & Locator (finding element on web )

    await heading.click();   // action (performing action that to click on headind)

    await expect(heading).toHaveText("Playwright Locators Demonstration"); // assertion (verifying the text is present correct or not)
    await expect(heading).toBeVisible(); // (verifying that heading is present or not)
 
    // heading1

    const heading1:Locator=page.getByRole("heading",{name:"Buttons"});

    await expect(heading1).toBeVisible();
    await expect(heading1).toHaveText("Buttons");
    
    // <a href="#">Home</a> 

    // link

    // const link:Locator =page.getByRole("link",{name:"Home"});

    //  await link.click();
    // await expect(link).toBeVisible();

    // button 

    // <button role="button">Primary Action</button>
    
    // button

    const button:Locator = page.getByRole("button",{name:"Primary Action"});

    await button.click();
    await button.check();

    await expect(button).toBeVisible();
    await expect(button).toBeChecked();
    await expect(button).toBeEnabled();
    
    // button 1

   const button1:Locator= page.getByRole("button",{name:"Toggele Button"});

   await button.click();
   await button.check();

   await expect(button).toBeVisible();
   await expect(button).toBeChecked();
   await expect(button).toBeEnabled();

   // textbox

   // <input type="text" id="username" role="textbox">

   const textbox=page.getByRole("textbox",{name:"username"});
   await textbox.fill("Ameen");
   await expect(textbox).toHaveText("Ameen");

   await page.waitForTimeout(4000);
    // 5. getByText()

    // <p>"This page demonstrates various Playwright locators with properly aligned elements."</p> - HTML
     
    // para

    const para:Locator=page.getByText("This page demonstrates various Playwright locators with properly aligned elements."); // varaible is declared by combinations of const & locator
    
    await expect(para).toBeVisible();
    await expect(para).toHaveText("This page demonstrates various Playwright locators with properly aligned elements.");
    
    //para1

    const para1:Locator = page.getByText("Locate elements by their explicit or implicit ARIA roles.");

    await expect(para1).toBeVisible();
    await expect(para1).toHaveText("Locate elements by their explicit or implicit ARIA roles.");

});