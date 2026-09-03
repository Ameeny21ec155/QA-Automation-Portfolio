import {test , expect} from "@playwright/test";

test("prcatice the getByRole locators",async({page})=>{

await page.goto("file:///C:/Users/shaik/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/267D52D87DDA204B252B0DD43C9AEA3C531A65C1/transfers/2026-31/app.html");

await page.getByRole("button",{name:"Primary Action"}).click();
await page.getByRole("button",{name:"Toggle Button"}).click();
await page.getByRole("textbox",{name:"Username"}).fill("Ameen Shaik");
// await page.getByRole("textbox", { name: "Username:" }).fill("Ameen");
await page.getByRole("checkbox").check();
await page.getByRole("link",{name:"Home"}).first().click();
await page.getByRole("link",{name:"Products"}).nth(1).click();
//await page.getByRole("link",{name:"Contact"}).nth(2).click();
await page.waitForTimeout(2000);
});

test("practice getByLabel",async({page})=>{

    await page.goto("file:///C:/Users/shaik/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/267D52D87DDA204B252B0DD43C9AEA3C531A65C1/transfers/2026-31/app.html");

    await page.getByLabel("Email Address").fill("Rizwana@gmail.com");
    await page.getByLabel("Password").fill("12345");
    await page.getByLabel("Your Age:").fill("25");
    await page.waitForTimeout(2000);
});

test("Practice getByPlaceholder built-in locator",async({page})=>{

    await page.goto("file:///C:/Users/shaik/OneDrive/Desktop/TS/app%20(2).html");
    await page.getByPlaceholder("Enter your full name").fill("Ameen Shaik");
    await page.getByPlaceholder("Phone number").fill("9999111122");
    await page.getByPlaceholder("Type your message here").fill("Ameen is practicing getByPlaceholder built-in locator");
    await page.getByPlaceholder("Search products").fill("Playwright");
    await page.waitForTimeout(2000);
});

test("Practice getByText built-in locator",async({page})=>{

   await page.goto("file:///C:/Users/shaik/OneDrive/Desktop/TS/app%20(2).html");
   await page.getByText("Locate elements by their text content");
   await page.getByText("This paragraph contains some important text that you might want to locate");
   await page.getByText("This paragraph contains some important text that you might want to locate");
   await page.getByText("List item 1");
   await page.getByText("List item 2 with link");
   await page.getByText("Special: Unique text identifier");
   await page.waitForTimeout(2000);
});

test("Practice the getByAltText built in locator",async({page})=>{

       await page.goto("file:///C:/Users/shaik/OneDrive/Desktop/TS/app%20(2).html");
       await page.getByAltText("logo image").click();
       await page.waitForTimeout(2000);
});

test("Practice getByTitle built-in locator",async({page})=>{

     await page.goto("file:///C:/Users/shaik/OneDrive/Desktop/TS/app%20(2).html");
     await page.getByTitle("Home page link").click();
     await page.getByTitle("HyperText Markup Language");
     await page.getByTitle("Tooltip text").hover();
     await page.waitForTimeout(2000);
});

test("Practice test-id built-in locator",async({page})=>{

     await page.goto("file:///C:/Users/shaik/OneDrive/Desktop/TS/app%20(2).html");
     await expect(page.getByTestId("profile-name")).toHaveText("John Doe");
     await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
     await page.getByTestId("edit-profile-btn").click();
     
});




