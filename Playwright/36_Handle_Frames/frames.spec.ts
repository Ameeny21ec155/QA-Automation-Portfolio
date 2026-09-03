/* 
What is an iFrame ?

An iframe (Inline frame) is an HTML element that allows one web page
to be embedded inside another web page.

tag: frame , iframe 
 frameset --> contains multiple frames

Examples:
- YouTube Vedios
- Payment gateways
- Advertisements
- External web pages

page.frame(locator)     ----> Not auto waited
page.framelocator(locator) --> auto waited

page.frames() --> returns all the frames

*/

import {test,expect} from '@playwright/test';

test('handle frames',async({page})=>{

    // Open the frames demo application
    await page.goto("https://ui.vision/demo/webtest/frames");

    await page.waitForTimeout(2000);

    // Get all frames available on the page
    const frames = page.frames()
    console.log("Number of frames:",frames.length)

    // Verify total number of frames
    expect(frames.length).toBe(7);

    // Approach 1: Using page.frame() - This approach is not recommended.
    // page.frame() returns a Frame Object , we can locate and interact with elements inside that frame.
    // After getting the frame object, we can locate and interact with elements inside that frame.

    const frame1=page.frame( {url:"https://ui.vision/demo/webtest/framees/frame_1"}) //1
    // page.locator('frameset').locator('frame').nth(0) //2
    // page.locator("frame[src='frame_1.html']") //3

    if(frame1){
        await frame1.locator("input[name='mytext1']").fill("Hello")
    } else {
        console.log("Frame 1 is not available.")
    }

    // Approach 2: using framelocator()
    // frameLocator() is the recommended approach because it directly
    // locates elements inside an iframe without creating a frame object

    const txtName=page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']");
    await txtName.fill("John");


});

test('inner frames', async({page})=>{

    //open the frames demo application
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Parent frame
    const frame3=page.frameLocator("frame[src='frame_3.html']")
    await frame3.locator("input[name='mytext3']").fill("Welcome")

    //childframe/innerframe
    const childFrame=frame3.frameLocator('iframe')
    
    await childFrame.getByRole('radio',{name:'I am a human'}).check();
    const checkbox = childFrame.getByRole('checkbox',{name:'Form Autofilling'});
    await checkbox.click();
});
