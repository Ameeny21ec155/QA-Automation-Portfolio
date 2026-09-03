import{test,expect} from '@playwright/test'

test.beforeEach("Navigate to the File Upload page",async({page})=>{

     await page.goto("https://sdetqa.vercel.app/autoplay");
     await expect(page).toHaveURL(/autoplay/);

});

test.afterEach('Closing the page',async ({page})=>{
    await page.close();
});

test ('Single file upload',async({page})=>{

    const singleFileInput = page.locator('#singleFileInput');
    const uploadSingleButton = page.getByRole('button',{name:'Upload Single File '});
    const uploadStatus = page.locator('#singleFileStatus');

     // Upload single file
    await singleFileInput.setInputFiles("tests/uploads/Ameen 155.txt");
    await uploadSingleButton.click();
    await expect(uploadStatus).toHaveText(/Single file selected: Ameen 155.txt/);

    await page.waitForTimeout(3000);
});

test("multiple file upload", async ({ page }) => {

    const multipleFileInput = page.locator("#multipleFilesInput");

    const uploadMultipleButton = page.getByRole("button", {
        name: "Upload Multiple"
    });

    const uploadStatus = page.locator("#multipleFilesStatus");


    // Upload multiple files
    await multipleFileInput.setInputFiles([
        "tests/uploads/Ameen 155.txt",
        "tests/uploads/ibm certificate.pdf"
    ]);


    // Click Upload Multiple button
    await uploadMultipleButton.click();

    // Verify uploaded files
    await expect(uploadStatus).toContainText("Ameen 155.txt");
    await expect(uploadStatus).toContainText("ibm certificate.pdf");
});

