import { test, expect } from '@playwright/test';

test('Setup/Users check', async ({ page }) => {
  await page.goto('https://test.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce9@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page
    .getByRole('button', { name: 'Setup' })
    .getByRole('button', { name: 'Setup', exact: true })
    .filter({ hasText: 'Setup' })
    .click();
  const page1Promise = page.waitForEvent('popup');
  await page
    .getByRole('menuitem', {
      name: 'Setup Opens in a new tab Setup for current app',
    })
    .click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Users' }).click();
});
