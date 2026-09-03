/*

Browser context for two different users 

Browser
|
|---Admin Context 
|    |
|    |---Admin Page (Login as admin user)
|
|---Customer Context 
|    |
|    |---Customer Page (Login as a other user)

*/

import{test,chromium} from"@playwright/test"

test("BRowser context multiple logins",async()=>{

    // Browser
   const browser = await  chromium.launch();

   // Admin Context 
   const admin_context = await browser.newContext();
   const admin_page = await admin_context.newPage();

   // User Context 
   const user_context = await browser.newContext();
   const user_page = await browser.newPage();

   // Login as Admin
   await admin_page.goto('https://www.saucedemo.com/');
   await admin_page.locator('#user-name').fill('standard_user');
   await admin_page.locator('#password').fill('secret_sauce');
   await admin_page.locator('#login-button').click();

   // Login as user
   await user_page.goto('https://www.saucedemo.com/');
   await user_page.locator('#user-name').fill('visual_user');
   await user_page.locator('#password').fill('secret_sauce');
   await user_page.locator('#login-button').click();

   console.log('Both users are logged in independently')

   await admin_page.waitForTimeout(5000);
   await user_page.waitForTimeout(5000);

   await admin_page.close();
   await user_page.close();

   await browser.close();


});