import { Page } from '@playwright/test';

export class PIMPage {
  constructor(private page: Page) {}

  // Locators
  private readonly pimLink = this.page.getByRole('link', { name: 'PIM' });
  private readonly employeeNameField = this.page.getByRole('textbox', { name: 'Type for hints...' }).first();
  private readonly searchButton = this.page.getByRole('button', { name: 'Search' });
  private readonly resetButton = this.page.getByRole('button', { name: 'Reset' });
  private readonly employeeInformationHeading = this.page.getByRole('heading', { name: 'Employee Information', level: 5 });
  private readonly employeeTable = this.page.getByRole('table');

  // Actions
  async navigateToPIM(): Promise<void> {
    await this.pimLink.click();
    await this.page.waitForURL('**/pim/viewEmployeeList');
  }

  async enterEmployeeName(name: string): Promise<void> {
    await this.employeeNameField.fill(name);
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async searchEmployee(name: string): Promise<void> {
    await this.enterEmployeeName(name);
    await this.clickSearch();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  // Add Employee Actions
  async clickAddEmployee(): Promise<void> {
    await this.page.getByRole('link', { name: 'Add Employee' }).click();
    // Wait for the form to appear - look for First Name field
    await this.page.getByRole('textbox', { name: 'First Name' }).waitFor({ state: 'visible', timeout: 5000 });
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  }

  async enterEmployeeId(employeeId: string): Promise<void> {
    // Employee ID is the unlabeled textbox after the name fields
    // We'll find it by locating all textboxes and selecting the one that's not labeled
    const allTextboxes = this.page.getByRole('textbox');
    
    // The Employee ID textbox doesn't have an aria-label
    // Skip the first one (Search sidebar) and the next three (First, Middle, Last names)
    // The 5th textbox (index 4) should be the Employee ID field
    await allTextboxes.nth(4).fill(employeeId);
  }

  async clickSaveEmployee(): Promise<void> {
    await this.page.getByRole('button', { name: 'Save' }).click();
    // Wait for navigation to start
    await this.page.waitForTimeout(2000);
  }

  async addEmployee(firstName: string, lastName: string, employeeId: string): Promise<void> {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterEmployeeId(employeeId);
    await this.clickSaveEmployee();
  }

  // Assertions helpers
  async isEmployeeInformationSectionVisible(): Promise<boolean> {
    try {
      await this.employeeInformationHeading.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async isOnPIMPage(): Promise<boolean> {
    await this.page.waitForURL('**/pim/viewEmployeeList', { timeout: 5000 });
    return this.page.url().includes('/pim/viewEmployeeList');
  }

  async isOnEmployeeProfilePage(): Promise<boolean> {
    try {
      // Wait a bit for navigation to complete
      await this.page.waitForTimeout(2000);
      
      // Check if URL contains viewPersonalDetails or viewEmployeeList
      const currentUrl = this.page.url();
      return currentUrl.includes('/pim/viewPersonalDetails/empNumber/');
    } catch {
      return false;
    }
  }

  async isEmployeeNameDisplayed(fullName: string): Promise<boolean> {
    try {
      const nameHeading = this.page.getByRole('heading', { name: fullName, level: 6 });
      await nameHeading.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  async areSearchResultsDisplayed(): Promise<boolean> {
    try {
      // Wait for table to be visible
      await this.employeeTable.waitFor({ state: 'visible', timeout: 5000 });
      
      // Check if table has data rows (look for cells with content)
      const cells = await this.page.getByRole('cell').count();
      
      // Table should have cells indicating data is present
      // (header cells + data cells)
      return cells > 0;
    } catch {
      return false;
    }
  }
}
