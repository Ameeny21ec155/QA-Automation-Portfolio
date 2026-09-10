import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OrangeHRM Logout Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
  });

  test('should successfully logout and verify login page is displayed with Username field', async ({ page }) => {
    // Login first
    await loginPage.login('Admin', 'admin123');

    // Verify we are on the dashboard
    const isDashboardDisplayed = await loginPage.isDashboardDisplayed();
    expect(isDashboardDisplayed).toBe(true);

    // Perform logout
    await loginPage.logout();

    // Verify login page is displayed
    const isLoginPageDisplayed = await loginPage.isLoginPageDisplayed();
    expect(isLoginPageDisplayed).toBe(true);

    // Verify the page contains Username field
    const isUsernameFieldVisible = await loginPage.isUsernameFieldVisible();
    expect(isUsernameFieldVisible).toBe(true);

    // Additional verification: Check URL contains auth/login path
    expect(page.url()).toContain('/auth/login');
  });
});
