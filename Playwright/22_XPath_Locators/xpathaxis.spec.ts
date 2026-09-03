import { test, expect, Locator } from "@playwright/test";

test("Xpath Axes demo", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1.Self Axis

    const germanyCell = page.locator("xpath=//td[text()='Germany']/self::td");
    await expect(germanyCell).toHaveText("Germany");

    // 2.Parent Axis

    const parentRow = page.locator("xpath=//td[text()='Germany']/parent::tr");
    await expect(parentRow).toContainText("Maria Anders");

    // 3.child axis - get all <td> children of the second <tr> in the table

    const secondRowCells: Locator=page.locator("xpath=//table[@id='customers']//tr[2]/child::td"); // returns multiple elements(td's)
    await expect(secondRowCells).toHaveCount(3);

    // 4.ancestor axis - get ancestor <table> of the Germany cell

    const table:Locator=page.locator("xpath=//td[text()='Germany']/ancestor::table")
    await expect(table).toHaveAttribute('id','customers');

    // 5.descendent axis - get all <td> elements under the table

    const allTds = page.locator("xpath=//table[@id='customers']/descendant::td");
    await expect(allTds).toHaveCount(18);

    // 6. following axis - Get the <td> that comes afetr "germany" in document order

    const followingCell:Locator=page.locator("xpath=//td[normalize-space()='Germany']/following::td[1]");
    await expect(followingCell).toHaveText("Centro comercial Moctezuma");

    // 7. following-sibling axis - Get <td>s to the right of "Germany"
    const rightsiblings = page.locator("xpath=//td[normalize-space()='Maria Anders']/following-sibling::td");

    await expect(rightsiblings).toHaveCount(1);
    await expect(rightsiblings).toHaveText("Germany");

    // 8. preceding - get the <td> just before "Germany"
    
    const precedingCell = page.locator("xpath=//td[text()='Germany']/preceding::td[1]");
    await expect(precedingCell).toHaveCount(1);
    await expect(precedingCell).toHaveText("Maria Anders");


    // 9. Preceding-sibling axis - Get <td> to the left of "Germany"

  const leftSibling:Locator = page.locator("xpath=//td[text()='Germany']/preceding-sibling::td");
  await expect(leftSibling).toHaveCount(2);

  await expect(leftSibling.nth(0)).toHaveText("Alfreds Futterkiste");
  await expect(leftSibling.nth(1)).toHaveText("Maria Anders");

});