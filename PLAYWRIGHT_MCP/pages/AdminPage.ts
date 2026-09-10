import { Page } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  // Locators
  private readonly adminLink = this.page.getByRole('link', { name: 'Admin' });
  private readonly systemUsersHeading = this.page.getByRole('heading', { name: 'System Users', level: 5 });
  private readonly addButton = this.page.getByRole('button', { name: 'Add' });

  // Actions
  async navigateToAdmin(): Promise<void> {
    await this.adminLink.click();
    await this.page.waitForURL('**/admin/viewSystemUsers');
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  // Assertions helpers
  async isOnAdminPage(): Promise<boolean> {
    await this.page.waitForURL('**/admin/viewSystemUsers', { timeout: 5000 });
    return this.page.url().includes('/admin/viewSystemUsers');
  }

  async isSystemUsersHeadingVisible(): Promise<boolean> {
    try {
      await this.systemUsersHeading.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async pageContainsSystemUsers(): Promise<boolean> {
    try {
      // Check if "System Users" text is present on the page
      const systemUsersText = this.page.getByText('System Users');
      await systemUsersText.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async isAddButtonVisible(): Promise<boolean> {
    try {
      await this.addButton.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
