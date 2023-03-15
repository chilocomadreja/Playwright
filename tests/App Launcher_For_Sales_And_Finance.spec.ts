import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://spar--preprod.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin-bvrm@force.com.preprod');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce10@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto(
    'https://spar--preprod.sandbox.lightning.force.com/lightning/page/home'
  );
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('option', { name: 'Sales' }).click();
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('option', { name: 'Finance' }).click();
});
