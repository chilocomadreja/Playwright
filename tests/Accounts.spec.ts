import { test, expect } from '@playwright/test';

test('Account tab', async ({ page }) => {
  await page.goto('https://spar--preprod.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('ekspansjaautotest@clorce.preprod.pl');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce4@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('link', { name: 'Konta', exact: true }).click();
  await page.locator('one-appnav').click();
  await page.getByRole('button', { name: 'Wybierz widok listy' }).click();
  await page.getByRole('option', { name: 'Wszystkie' }).click();
 
});