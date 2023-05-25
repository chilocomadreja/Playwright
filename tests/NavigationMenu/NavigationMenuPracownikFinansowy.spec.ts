import { test, expect } from '@playwright/test';

test.describe.parallel('Menu: Sprzedaz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');

    await page.click('text=Log In to Sandbox');
    await page
      .getByLabel('Username')
      .fill('pracownikfinansow@clorce.com.sebamaboxa');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Clorce1@');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  });

  test('Accounts visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Konta', exact: true }).click();
    await page.locator('one-appnav').click();
  });

  test('Contacts tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Kontakty' }).click();
    await page.locator('one-appnav').click();
  });

  test('Opportunities tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Klienci w procesie' }).click();
    await page.locator('one-appnav').click();
  });

  test('Tasks tab visibility', async ({ page }) => {
    await page.click('text=Zadania');
    await page.locator('one-appnav').click();
  });

  test('Calendar tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Kalendarz' }).click();
    await page.locator('one-appnav').click();
  });

  test('Dashboards tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Pulpity' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Raporty' }).click();
    await page.locator('one-appnav').click();
  });
});
