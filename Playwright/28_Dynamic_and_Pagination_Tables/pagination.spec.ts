import { test, expect } from "@playwright/test";
import fs from "fs";

test("Extracting data from table", async ({ page }) => {

    const filePath = "./tests/pagination/testdata.txt";

    // Create folder if it does not exist
    fs.mkdirSync("./tests/pagination", { recursive: true });

    // Clear old file
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    await page.goto(
        "https://datatables.net/examples/basic_init/zero_configuration.html"
    );

    const tableRowLocator = page.locator("#example tbody tr");
    const nextButtonLocator = page.getByRole("link", { name: "Next" });

    let hasNextPage = true;
    let pageCount = 1;

    while (hasNextPage) {

        await tableRowLocator.first().waitFor({
            state: "visible"
        });

        console.log("Page No =====>", pageCount);

        const rows = await tableRowLocator.all();

        let pageDataString = "";

        for (const row of rows) {

            const cells = await row.locator("td").allTextContents();

            if (cells.length > 0) {

                pageDataString += cells.join(",") + "\n";

                console.log(cells);
            }
        }

        // Write current page data to file
        fs.appendFileSync(filePath, pageDataString);

        // 2.Check Next button
        if (
            await nextButtonLocator.isVisible() &&
            await nextButtonLocator.isEnabled()
        ) {

            await nextButtonLocator.click();

            pageCount++;

            await page.waitForTimeout(1000);

        } else {

            console.log("Reached end of the page..");

            hasNextPage = false;
        }
    }

    console.log("Data successfully written to:", filePath);
});