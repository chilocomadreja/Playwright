import { test, expect } from '@playwright/test';

test.describe.parallel('Menu: Sprzedaz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'logistykatestb2b@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('Accounts', async ({ page }) => {
    await page.click('text=Konta');
    await page.locator('one-appnav').click();
  });

  test('Contacts', async ({ page }) => {
    await page.getByRole('link', { name: 'Kontakty' }).click();
    await page.locator('one-appnav').click();
  });

  test('Opportunities', async ({ page }) => {
    await page.getByRole('link', { name: 'Klienci w procesie' }).click();
    await page.locator('one-appnav').click();
  });

  test('Tasks', async ({ page }) => {
    await page.click('text=Zadania');
    await page.locator('one-appnav').click();
  });

  test('Calendar', async ({ page }) => {
    await page.getByRole('link', { name: 'Kalendarz' }).click();
    await page.locator('one-appnav').click();
  });

  test('Dashboards', async ({ page }) => {
    await page.getByRole('link', { name: 'Pulpity' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports', async ({ page }) => {
    await page.getByRole('link', { name: 'Raporty' }).click();
    await page.locator('one-appnav').click({ timeout: 80000 });
  });
});
