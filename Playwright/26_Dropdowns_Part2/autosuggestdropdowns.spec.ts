import { test, expect, Locator } from "@playwright/test";

test("Auto suggested drop downs", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    // 1. Enter search text
    await page
        .locator("input[name='q']:not([readonly])")
        .fill("smart");

    // 2. Wait for auto-suggestions
    await page.waitForTimeout(4000);

    // 3. Check current DOM structure
    console.log("UL count:", await page.locator("ul").count());
    console.log("LI count:", await page.locator("li").count());

    // 4. Get all possible list options
    const options: Locator = page.locator("ul > li");

    // 5. Count suggestions
    const count = await options.count();

    console.log("Number of suggested options:", count);

    // 6. Print 5th option only if it exists
    if (count >= 5) {
        console.log(
            "5th option:",
            await options.nth(4).innerText()
        );
    } else {
        console.log("5th option is not available.");
    }

    // 7. Print all auto-suggestions
    console.log("Printing all the auto suggestions....");

    for (let i = 0; i < count; i++) {
        console.log(
            `${i + 1}.`,
            await options.nth(i).textContent()
        );
    }

    // select/click on the smartphone option

    for(let i=0; i<count;i++)
    {
        const text =await options.nth(i).innerText();
        if(text==='smartphone')
        {
            options.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(3000);
});

// | File                                      | Manam ekkada pettachu                                           |
// | ----------------------------------------- | --------------------------------------------------------------- |
// | `assertions.spec.ts`                      | **Playwright Assertions** → separate topic/folder               |
// | `autosuggestdropdowns.spec.ts`            | **Dropdowns**                                                   |
// | `browser_context_multiple_logics.spec.ts` | **Browser Context / Fixtures**                                  |
// | `browser_context.spec.ts`                 | **Browser Context / Fixtures**                                  |
// | `built_in_functions.spec.ts`              | **Locators / Playwright basics** — inspect code before deciding |
// | `hiddenbootstrapdropdown.spec.ts`         | **Dropdowns**                                                   |
// | `multidropdowns.spec.ts`                  | **Dropdowns Part 2**                                            |
// | `pagination.spec.ts`                      | **Dynamic & Pagination Tables**                                 |
// | `scrolling.spec.ts`                       | **Scrolling Techniques**                                        |
// | `pagination`                              | likely folder/file without extension — inspect before moving    |
