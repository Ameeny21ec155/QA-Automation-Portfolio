import { test, expect } from '@playwright/test';

test('Shadow DOM', async ({ page }) => {

    await page.goto('https://sdetqa.vercel.app/autoplay');

    // Heading
    const shadowHeading = page.locator('h3', {
        hasText: 'Shadow DOM'
    });

    await shadowHeading.scrollIntoViewIfNeeded(); // Optional
    await expect(shadowHeading).toBeVisible();

    // Main Shadow Host
    const shadowHost = page.locator('#shadow_host');

    await expect(shadowHost).toBeVisible();

    // Shadow DOM text
    await expect(
        shadowHost.getByText('Mobiles')
    ).toBeVisible();

    await expect(
        shadowHost.getByText('Laptops')
    ).toBeVisible();

    // Shadow DOM elements
    const textInput = shadowHost.locator('input[type="text"]');
    const checkbox = shadowHost.locator('input[type="checkbox"]');
    const fileInput = shadowHost.locator('input[type="file"]');

    // Text Input
    await textInput.fill('Welcome');
    await expect(textInput).toHaveValue('Welcome');

    // Checkbox
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    // File Upload
    await fileInput.setInputFiles('tests/uploads/Ameen 155.txt');

    
   // YouTube Link
    const youtubeLink = page.getByRole('link', {name: 'Youtube'});
    await expect(youtubeLink).toBeVisible();
    await expect(youtubeLink).toHaveAttribute('href','https://www.youtube.com/@sdetpavan/videos');

    // Blog Link inside Shadow DOM
    const blogLink = shadowHost.getByRole('link', {name: 'Blog'});

    await expect(blogLink).toBeVisible();

    await expect(blogLink).toHaveAttribute('href','https://www.pavantestingtools.com/');
});