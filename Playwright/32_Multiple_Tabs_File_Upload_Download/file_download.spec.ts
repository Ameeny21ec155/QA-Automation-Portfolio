import{test,expect} from '@playwright/test'

import fs from 'fs'

test.beforeEach("Navigate to the File Upload page",async({page})=>{

     await page.goto("https://sdetqa.vercel.app/autoplay");
     await expect(page).toHaveURL(/autoplay/);

});

test.afterEach('Closing the page',async ({page})=>{
    await page.close();
});

test('File download',async({page})=>{

    const [download]=await Promise.all(
        [
            page.waitForEvent('download'),
            page.locator('button' , {hasText: 'Download File'}).click(),
        ]
    )

    expect(download.suggestedFilename()).toContain("sample.txt");

    // save the file in the custom path
    const downloadPath = "downloads/sample.txt"
    // const downloadPath = "downloads/`${download.suggestedFilename()}`" // Dynamic file name
    await download.saveAs(downloadPath);

    const fileExists=fs.existsSync(downloadPath);
    expect(fileExists).toBeTruthy()

    // delete the file/ clean up the file inside the folder 

    if(fileExists){
        fs.unlinkSync(downloadPath)
    }
})