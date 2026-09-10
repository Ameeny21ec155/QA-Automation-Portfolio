import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

test.describe('OrangeHRM PIM - Add Employee Tests', () => {
  let loginPage: LoginPage;
  let pimPage: PIMPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    pimPage = new PIMPage(page);
    
    // Navigate and login
    await loginPage.navigateToLogin();
    await loginPage.login('Admin', 'admin123');
  });

  test('should successfully add a new employee and verify employee profile', async ({ page }) => {
    // Navigate to PIM module
    await pimPage.navigateToPIM();

    // Click on Add Employee link
    await pimPage.clickAddEmployee();

    // Generate a unique employee ID that stays within OrangeHRM's 10-character limit.
    const timestamp = Date.now().toString().slice(-6);
    const uniqueEmployeeId = `9999${timestamp}`;

    // Fill in employee details
    await pimPage.enterFirstName('John123');
    await pimPage.enterLastName('Doe456');
    await pimPage.enterEmployeeId(uniqueEmployeeId);

    // Click Save and wait for navigation
    await pimPage.clickSaveEmployee();

    // Give it more time to navigate and check current URL
    await page.waitForTimeout(5000);
    console.log('Current URL after save:', page.url());

    // Check if we're on the employee profile page or back on the add employee page
    if (page.url().includes('/pim/viewPersonalDetails/empNumber/')) {
      // Verify that employee profile page URL is displayed
      expect(page.url()).toContain('/pim/viewPersonalDetails/empNumber/');

      // Verify that the name "John123 Doe456" is visible on the profile page
      const isEmployeeNameDisplayed = await pimPage.isEmployeeNameDisplayed('John123 Doe456');
      expect(isEmployeeNameDisplayed).toBe(true);

      // Additional verification: Check for Personal Details tab
      const personalDetailsTab = page.getByRole('tab', { name: 'Personal Details' });
      await expect(personalDetailsTab).toBeVisible();

      // Additional verification: Verify first and last name are displayed in the form
      const firstNameInput = page.getByRole('textbox', { name: 'First Name' });
      const lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
      
      await expect(firstNameInput).toHaveValue('John123');
      await expect(lastNameInput).toHaveValue('Doe456');
    } else {
      // If not navigated, check for validation errors
      const errorElements = page.locator('[role="alert"]');
      const errorCount = await errorElements.count();
      console.log('Found', errorCount, 'error elements');
      for (let i = 0; i < errorCount; i++) {
        const text = await errorElements.nth(i).textContent();
        console.log('Error', i, ':', text);
      }
      throw new Error(`Expected to navigate to employee profile page, but stayed at ${page.url()}`);
    }
  });
});
