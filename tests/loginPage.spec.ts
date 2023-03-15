import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
  await page.goto('https://spar--preprod.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('ekspansjaautotest@clorce.preprod.pl');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce4@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto(
    'https://spar--preprod.sandbox.lightning.force.com/lightning/page/home'
  );
});

test('login page2', async ({ page }) => {
  await page.goto('https://spar--preprod.sandbox.my.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('ekspansjaautotest@clorce.preprod.pl');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce4@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.goto(
    'https://spar--preprod.sandbox.lightning.force.com/lightning/page/home'
  );
});
