import{test , expect} from "@playwright/test"

test("Page fixture test",async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill("problem_user");
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL(/inventory/);

});

// browser --> context --> page
// context(Incognito window)

test('Context fixture test', async ({ context }) => {

    const mypage1 = await context.newPage();

    await mypage1.goto("https://www.saucedemo.com/");

    await mypage1.locator('#user-name').fill("problem_user");
    await mypage1.locator('#password').fill("secret_sauce");
    await mypage1.locator('#login-button').click();

    await expect(mypage1).toHaveURL(/inventory/);


    // Create second page in the same browser context
    const mypage2 = await context.newPage();
    await mypage2.goto("https://www.google.com/");
    await mypage2.locator(".ESTs9d").click();
    

    // Verify second page URL
    await expect(mypage2).toHaveURL(/google/);

});

/* browser
     - context 1
        -page1
        -page2

     - context 2
        -page1
        -page2
        */

test('browser fixture test',async({browser})=>{

    // context1:
    const context1 = await browser.newContext();
       const context1_page1 = await context1.newPage();
        await  context1_page1.goto("https://www.google.com/");

       const context1_page2 = await context1.newPage();
         await context1_page2.goto("https://www.rediff.com/");


    // context2:
    const context2 = await browser.newContext();
       const context2_page1 = await context2.newPage();
        await  context2_page1.goto("https://www.google.com/");

       const context2_page2 = await context2.newPage();
         await context2_page2.goto("https://www.rediff.com/");

});        