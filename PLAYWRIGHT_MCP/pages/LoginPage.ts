import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Locators
  private readonly usernameInput = this.page.getByRole('textbox', { name: 'Username' });
  private readonly passwordInput = this.page.getByRole('textbox', { name: 'Password' });
  private readonly loginButton = this.page.getByRole('button', { name: 'Login' });

  // Actions
  async navigateToLogin(): Promise<void> {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded',
    });
    await this.usernameInput.waitFor({ state: 'visible', timeout: 30000 });
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  // Logout actions
  async clickUserProfileIcon(): Promise<void> {
    await this.page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  }

  async clickLogout(): Promise<void> {
    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
  }

  async logout(): Promise<void> {
    await this.clickUserProfileIcon();
    await this.clickLogout();
  }

  // Assertions helpers
  async isDashboardDisplayed(): Promise<boolean> {
    await this.page.waitForURL('**/dashboard/index');
    return this.page.url().includes('/dashboard/index');
  }

  async isLoginPageDisplayed(): Promise<boolean> {
    await this.page.waitForURL('**/auth/login');
    return this.page.url().includes('/auth/login');
  }

  async isUsernameFieldVisible(): Promise<boolean> {
    const usernameField = this.page.getByRole('textbox', { name: 'Username' });
    // Wait for the field to be visible with a reasonable timeout
    try {
      await usernameField.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
