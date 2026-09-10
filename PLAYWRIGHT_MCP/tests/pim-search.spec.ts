import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

test.describe('OrangeHRM PIM - Employee Search Tests', () => {
  let loginPage: LoginPage;
  let pimPage: PIMPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    pimPage = new PIMPage(page);
    
    // Navigate and login
    await loginPage.navigateToLogin();
    await loginPage.login('Admin', 'admin123');
  });

  test('should search for employee in PIM module and display results', async ({ page }) => {
    // Navigate to PIM module
    await pimPage.navigateToPIM();

    // Verify that we are on PIM page
    const isOnPIMPage = await pimPage.isOnPIMPage();
    expect(isOnPIMPage).toBe(true);

    // Verify that "Employee Information" section is visible
    const isEmployeeInformationVisible = await pimPage.isEmployeeInformationSectionVisible();
    expect(isEmployeeInformationVisible).toBe(true);

    // Enter a name in search field
    await pimPage.enterEmployeeName('a');

    // Click Search button
    await pimPage.clickSearch();

    // Verify that search results table is displayed
    const employeeTableLocator = page.getByRole('table');
    await expect(employeeTableLocator).toBeVisible();

    // Verify that the table has at least some content (column headers)
    const firstNameColumnHeader = page.getByRole('columnheader', { name: /First.*Name/ });
    await expect(firstNameColumnHeader).toBeVisible();
  });
});
