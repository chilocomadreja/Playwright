import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
  await page.goto('https://test.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce9@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto(
    'https://spar--preprod.sandbox.lightning.force.com/lightning/page/home'
  );
});




