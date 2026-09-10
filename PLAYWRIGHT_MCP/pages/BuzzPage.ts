import { Page } from '@playwright/test';

export class BuzzPage {
  constructor(private page: Page) {}

  async navigateToBuzz(): Promise<void> {
    await this.page.getByRole('link', { name: 'Buzz' }).click();
    await this.page.waitForURL('**/buzz/viewBuzz');
  }

  async enterPostMessage(message: string): Promise<void> {
    const composer = this.page.locator('textarea').first();
    await composer.waitFor({ state: 'visible', timeout: 10000 });
    await composer.fill(message);
  }

  async clickPost(): Promise<void> {
    await this.page.getByRole('button', { name: 'Post', exact: true }).click();
  }
}
