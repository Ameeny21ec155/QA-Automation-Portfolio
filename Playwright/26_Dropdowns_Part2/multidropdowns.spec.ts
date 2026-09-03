import {test, expect ,Locator} from "@playwright/test"

test("multi drop downs",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

     // 1. select option from the drop down(4 ways)

     // await page.locator("#colors").selectOption(["red","green","yellow"]); // 1. visible text
     // await page.locator("#colors").selectOption([{value:"red"},{value:"yellow"},{value:"white"}]);  // 2. by using value attribute
     // await page.locator("#colors").selectOption([{label:"Red"},{label:"Green"},{label:"White"}]); //3.by using label
     // await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]); // 4. by using index

     // 2. check number of options in the dropdown(count)

     const dropdownOptions:Locator=page.locator('#colors>option');
     await expect(dropdownOptions).toHaveCount(7);

     // 3. check an option present in the drop down

     const optionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
     console.log(optionsText);

      // 4. printing options from the drop down

     for(const option of optionsText)
     {
        console.log(option);
     }

     await page.waitForTimeout(3000);
     
});