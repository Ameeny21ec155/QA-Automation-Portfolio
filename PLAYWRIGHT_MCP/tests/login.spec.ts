import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type LoginDataRow = {
  Username: string;
  Password: string;
  Expected: string;
};

const csvContent = readFileSync('test_data/loginData.csv', 'utf-8');
const loginData = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
}) as LoginDataRow[];

test.describe('OrangeHRM Login CSV Data-Driven Tests', () => {
  test('should validate all rows from loginData.csv', async ({ page }) => {
    const loginPage = new LoginPage(page);

    for (const row of loginData) {
      console.log(`Running dataset row: Username=${row.Username}, Password=${row.Password}, Expected=${row.Expected}`);

      await loginPage.navigateToLogin();
      await loginPage.login(row.Username, row.Password);

      if (row.Expected === 'Dashboard') {
        await expect(page).toHaveURL(/\/dashboard\/index/);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        console.log(`PASS: ${row.Username} logged in successfully and dashboard is visible`);

        await loginPage.logout();

        await expect(page).toHaveURL(/\/auth\/login/);
        await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
      } else {
        await expect(page.getByText(row.Expected)).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();

        console.log(`PASS: ${row.Username} returned expected error message "${row.Expected}"`);
      }
    }
  });
});
