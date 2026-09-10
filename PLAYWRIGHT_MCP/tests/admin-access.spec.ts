import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test.describe('OrangeHRM Admin Module Tests', () => {
  let loginPage: LoginPage;
  let adminPage: AdminPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    adminPage = new AdminPage(page);
    
    // Navigate and login
    await loginPage.navigateToLogin();
    await loginPage.login('Admin', 'admin123');
  });

  test('should verify Admin module access and display System Users', async ({ page }) => {
    // Navigate to Admin module
    await adminPage.navigateToAdmin();

    // Verify that we are on Admin page
    const isOnAdminPage = await adminPage.isOnAdminPage();
    expect(isOnAdminPage).toBe(true);

    // Verify the page contains "System Users"
    const pageContainsSystemUsers = await adminPage.pageContainsSystemUsers();
    expect(pageContainsSystemUsers).toBe(true);

    // Verify that the "Add" button is visible
    const isAddButtonVisible = await adminPage.isAddButtonVisible();
    expect(isAddButtonVisible).toBe(true);

    // Additional verification: Check for System Users heading
    const systemUsersHeading = page.getByRole('heading', { name: 'System Users', level: 5 });
    await expect(systemUsersHeading).toBeVisible();

    // Additional verification: Verify Add button is clickable
    const addButton = page.getByRole('button', { name: 'Add' });
    await expect(addButton).toBeEnabled();
  });
});
