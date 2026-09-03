import { test, expect, Locator } from "@playwright/test";

test("Verify xpath demo in Playwright", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    // Absolute XPath
    const absoluteLogo = page.locator(
        "xpath=/html/body/div[4]/div/div/div/a/img"
    );

    await expect(absoluteLogo).toBeVisible();

    // Relative XPath
    const relativeLogo = page.locator(
        "xpath=//img[@alt='Tricentis Demo Web Shop']"
    );

    await expect(relativeLogo).toBeVisible();

    //3. contains()

    const products:Locator=page.locator("xpath=//h2/a[contains(@href,'computer')]");

    const productsCount: number=await products.count();
    console.log("No.of computer related products:",productsCount);
    expect(productsCount).toBeGreaterThan(0);

    // console.log(await products.textContent()); // Error: strict mode violation

    console.log("First computer related product:",await products.first().textContent());
    console.log("Last computer related product:",await products.last().textContent());
    console.log("nth computer related product:",await products.nth(2).textContent());  // Index is starting from zero

    let productTitles:string[]= await products.allTextContents(); // getting all the matched products in to an array

    console.log("All computer related products titles:",productTitles);

    for(let pt of productTitles)
    {
        console.log(pt);
    }

    //4. start-with()

    const buildingProducts:Locator=page.locator("xpath=//h2/a[starts-with(@href,'/build')]"); // returns multiple elements

    const count :number=await buildingProducts.count();
    expect(count).toBeGreaterThan(0);


    // 5. text()

    const reglink: Locator=page.locator("xpath=//a[text()='Register']");
    await expect(reglink).toBeVisible();

    //6.last()

    const lastitem: Locator=page.locator("xpath=//div[@class='column follow-us']//li[last()]");
    await expect(lastitem).toBeVisible();
    console.log("Text content of last element:",await lastitem.textContent() );

    //7.position()

    const positionitem: Locator=page.locator("xpath=//div[@class='column follow-us']//li[position(3)]");
    await expect(positionitem).toBeVisible();
    console.log("Text content of positional element:",await positionitem.textContent());
});