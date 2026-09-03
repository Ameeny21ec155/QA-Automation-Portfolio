/*

Locator - Identifies the element on the page 
DOM - Document Object Model
DOM is an API Interface provided by browser.

page.getByAltText() to locate an element, usually image, by its text alternative.

page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.

page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

import {test, expect, Locator} from "@playwright/test"

test("Verify playwright Locators",async ({page})=>{

    await page.goto("https://paytm.com/");

    // 1. page.getByAltText() - identifies images (and similar elments) based on the alt attribute.
    // Use this locator when your element supports alt text such as img and area elements.

    const logo:Locator= page.getByAltText("Paytm Logo").first();
    await expect(logo).toBeVisible();



// 2. page.getByText() - find an element by the text it contains . You can match by a substring , exact string.
// Locate by visible test
// Use this locator to find non interactive elements like div, span , p , etc.
// for interactive elements like button , a, input, etc. use role locators.

/* 
<p>welcome</p>
<div>hellow</div>

*/

//  const text:Locator=page.getByText("Recharges & Bill Payments");
//  await expect(text).toBeVisible();

// await expect(page.getByText("Recharges & Bill Payments")).toBeVisible(); // full string // full text 

// await expect(page.getByText("Recharges & Bill ")).toBeVisible(); // provided sub string also executed

await expect(page.getByText(/Recharges\s+&\s+Bill\s+Payments/i)).toBeVisible();  // regular expression

// i -> ignores case sensitive
// \s+ -> for spaces

// 3. page.getByRole() - Locating by Role (role is not an attribute)
/*
Role locators include buttons,checkboxes , headings , links , lists , tables,
and many more and follow W3C specifications for ARIA role.
Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
*/

await page.getByRole("link", {name: "Mobile Recharge"}).click();

// 4. page.getByLabel() - Locate form control by label's text
// when to use: ideal for form fields with visible labels.

// await page.getByLabel("From").type("Hyderabad"); // type is deprecated

await page.goto("https://tickets.paytm.com/trains/");

await page.locator("#sourceInput").fill("Hyderabad");

// 5. page.getByPlaceholder()- Finds element with a given placeholder text.
// Best for inputs without a label but having a placeholder

await page.goto("file:///C:/Users/shaik/Downloads/app.html");

await page.getByPlaceholder("Enter your full name").fill("Ameen");

await page.getByPlaceholder("Phone number").fill("7702094055");

// 6. page.getByTitle() to locate an element by its title attribute.
// when to use : when your element has a meaningful title attribute.

await expect(page.getByTitle("Home page link")).toHaveText("Home");

await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");

// 7. page.getByTestId() : Locate an element based on its data-testid attribute

// await expect(page.getByTestId("profile-email")).toHaveText("ameen@gmail.com");
// await expect(page.getByTestId("profile-name")).toHaveText("ameen shaik");

await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");

})

