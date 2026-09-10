import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BuzzPage } from '../pages/BuzzPage';

test.describe('OrangeHRM Buzz Module Tests', () => {
  let loginPage: LoginPage;
  let buzzPage: BuzzPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    buzzPage = new BuzzPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login('Admin', 'admin123');
  });

  test('should create a post in Buzz and verify it appears in the feed', async ({ page }) => {
    const message = 'Excited for testing!';

    await buzzPage.navigateToBuzz();

    await expect(page.getByText('Buzz Newsfeed', { exact: true })).toBeVisible();
    await expect(page.getByRole('textbox', { name: "What's on your mind?" })).toBeVisible();

    await buzzPage.enterPostMessage(message);
    await buzzPage.clickPost();

    const postedMessage = page.getByText(message, { exact: true }).last();
    await expect(postedMessage).toBeVisible();
  });
});
