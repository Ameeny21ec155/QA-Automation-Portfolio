import { test, expect } from "@playwright/test";

test.describe("Dynamic table", () => {

    test.beforeEach(async ({ page }) => {

        await page.goto("https://sdetqa.vercel.app/autoplay.html");

        await expect(page.getByText("AutoPlay")).toBeVisible();
    });


    test("Test Case 1: Chrome CPU Load validation", async ({ page }) => {

        // Locate dynamic table
        const table = page.locator("table").filter({
            hasText: "Chrome"
        }).first();

        // Locate rows inside the table
        const rows = table.locator("tbody tr");

        // Wait for dynamic rows
        await expect(rows.first()).toBeVisible();

        const rowCount = await rows.count();

        console.log("Number of rows:", rowCount);

        expect(rowCount).toBeGreaterThan(0);


        // Find Chrome row
        let CPULoad = "";

        for (const row of await rows.all()) {

            const processName =
                (await row.locator("td").nth(0).innerText()).trim();

            console.log("Process:", processName);

            if (processName === "Chrome") {

                // Get CPU load from Chrome row
                CPULoad =
                    (await row.locator("td").filter({
                        hasText: "%"
                    }).innerText()).trim();

                console.log("Chrome CPU Load from table:", CPULoad);


                // Get CPU load from red label
                const expCPULoad =
                    (await page.locator("strong.chrome-cpu").innerText()).trim();

                console.log("Chrome CPU Load from label:", expCPULoad);


                // Compare both values
                expect(CPULoad).toBe(expCPULoad);

                break;
            }
        }


        // Verify CPU load was found
        expect(CPULoad).toContain("%");


        // Verify red CPU label is visible
        const label = page.locator("strong.chrome-cpu");

        await expect(label).toBeVisible();


        // Verify label contains CPU load
        await expect(label).toContainText(CPULoad);

    });

    // Verify Firefox memory usage in the table matches the value in the blue label
    test('Test Case 2: Firrefox Memory usage Validation',async({page})=>{

        // Locator -----> array[Locators]
        const rows= await page.locator('#taskTable tbody tr').all()
        expect(rows.length).toBeGreaterThan(0)

        let memoryUsage = '';

        for(const row of rows){
            const processName=await row.locator('td').nth(0).innerText()
            if(processName==='Firefox'){
                memoryUsage=await row.locator('td',{hasText:/MB$/}).innerText()// captured fromt able
                const expectedMemory=await page.locator('strong.firefox-memory').innerText()
                expect(memoryUsage).toBe(expectedMemory)
                break
            
            }

        }

        expect(memoryUsage).not.toBe('');
        expect(memoryUsage).toContain('MB');

        const label = page.locator('strong.firefox-memory');

        await expect(label).toBeVisible();
        await expect(label).toContainText(memoryUsage);
    })

});