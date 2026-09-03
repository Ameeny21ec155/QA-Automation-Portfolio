import {test,expect,Page, Locator} from "@playwright/test"

async function selectDate(page:Page,targetYear:string,targetMonth:string,targetDay:string,isFuture:boolean) {
    
    while(true)
    {
        const currentMonth=await page.locator('.ui-datepicker-month').innerText();
        const currentYear=await page.locator('.ui-datepicker-year').innerText();

        if(currentMonth=== targetMonth && currentYear === targetYear){
            break;
        }

        if(isFuture){
            await page.locator('.ui-datepicker-next').click() //Next button
        }
        else{
            await page.locator('.ui-datepicker-prev').click() //Previous button
        }
    }

    // Select the date 
    const dates = await page.locator('.ui-datepicker-calendar td').all()

   /* for(const date of dates){
        const dayText = await date.innerText()

        if(dayText===targetDay){
            await date.click()
            break;
        }
    } 
    */

    await page.locator('.ui-datepicker-calendar td',{hasText:targetDay}).first().click();

}
test("Demo jQuery datepicker",async({page})=>{
await page.goto('https://sdetqa.vercel.app/autoplay.html ');

const dateInput=page.locator("#datepicker1");
await expect(dateInput).toBeVisible();

// Approach1:Directly set the date using fill()
// await dateInput.fill("09/01/2003"); //(mm/dd/yyyy) format

// Approach2: select date through calender

//clicking on the date picker
await dateInput.click()

//Target date(past/future)
const targetYear = '2003';
const targetMonth= 'September';
const targetDay  = '1';

// Select the date from the Calender
// calling re-usable function to select date

await selectDate(page,targetYear,targetMonth,targetDay,false) // false = past date , true = future date

//verify selected date
await expect(dateInput).toHaveValue("09/01/2003") // mm/dd/yyyy
await page.waitForTimeout(3000);

});