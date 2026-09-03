import {test , expect , Locator} from "@playwright/test"

test("Single Select drop down",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. select option from the drop down(4 ways)

    // await page.locator("#country").selectOption("India"); // 1. visible text
    // await page.locator("#country").selectOption({value:"uk"});  // 2. by using value attribute
    // await page.locator("#country").selectOption({label:"Japan"}); //3.by using label
    // await page.locator("#country").selectOption({index:4}); // 4. by using index
     
    // 2. check number of options in the dropdown(count)

    const dropdownOptions:Locator=page.locator('#country>option');
    await expect(dropdownOptions).toHaveCount(10);

    // 3. check an option present in the drop down

    const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    console.log(optionsText);

    // 4. printing options from the drop down

    for(const option of optionsText)
    {
        console.log(option);
    }
    await page.waitForTimeout(3500);

});