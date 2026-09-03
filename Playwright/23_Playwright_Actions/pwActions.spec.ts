import { test , expect, Locator} from "@playwright/test"

//Text Input / Text Box / Input Box


test (" test input actions",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const textbox: Locator = page.locator("#name");

await expect(textbox).toBeVisible();
await expect(textbox).toBeEnabled();

const maxlength: string | null = await textbox.getAttribute("maxlength"); // Returns value of maxlength attribute of the element

expect(maxlength).toBe('15');

// When we use assertion methods on element it returns promise 
// but when we use it on values it wont return promise 

await textbox.fill("Ameen Shaik");

// console.log("text content of 1st name :",await textbook.textContent()); // returns empty 

const enteredValue: string = await textbox.inputValue();
console.log("Input value of the firstname:", enteredValue); // returns the einput value of the text
expect (enteredValue).toBe("Ameen Shaik");


});

// Radio Buttons

test(" Radio buttons actions",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const maleRadio:Locator=page.locator("#male"); // Male radio button

await expect(maleRadio).toBeVisible();
await expect(maleRadio).toBeEnabled();
expect(await maleRadio.isChecked()).toBe(false);

await maleRadio.check(); // select radio button
expect (await maleRadio.isChecked()).toBe(true);
await expect(maleRadio).toBeChecked(); // Preferable

});

// Check Boxes

test.only(" Check buttons actions",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

// 1. Select specific checkbox (Sunday) using getByLabel and assert

const sundayCheckbox:Locator=page.getByLabel("Sunday");
await sundayCheckbox.check();
await expect(sundayCheckbox).toBeChecked();

 await page.waitForTimeout(1500);

// 2. Select all checkboxes and assert each is checked

const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const checkboxes:Locator[] = days.map(index => page.getByLabel(index));
expect(checkboxes.length).toBe(7);

 await page.waitForTimeout(1500);

// 3. Select all checkboxes and assert each is checked

for(const checkbox of checkboxes)
{
    await checkbox.check();
    await expect(checkbox).toBeChecked();
}

 await page.waitForTimeout(3000);

// 4. Uncheck last 3 checkboxes and assert

for(const checkbox of checkboxes.slice(-3))
{
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}

 await page.waitForTimeout(3000);

// 5. Toggle checkboxes: if checked, uncheck; if unchecked, check.Assert state flipped

 for(const checkbox of checkboxes)
 {
    if(await checkbox.isChecked()) //true
    {
        // only if checked
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    }
    else {
        // only if not checked
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
 }
 await page.waitForTimeout(3000);

 // 6. Randomly select check boxes - Select checkboxes by index (1,3,6) and assert

 const indexes:number[]=[1,3,6];

 for(const i of indexes)
 {
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
 }

 await page.waitForTimeout(1500);

 // 7. Select the check box based on the label

 const weekname:string="Friday";

 for(const label of days)
 {
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
 }

 await page.waitForTimeout(1500);
});