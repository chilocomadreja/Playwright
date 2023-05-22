import { test, expect } from '@playwright/test';

test.describe.parallel('Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'pracownikfinansowy@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce1@');
    await page.click('text=Log In to Sandbox');
  });

  test('Accounts visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Konta', exact: true }).click();
    await page.locator('one-appnav').click();
  });

  test('Invoices tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Faktury' }).click();
    await page.locator('one-appnav').click();
  });

  test('Import faktur tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Import faktur' }).click();
    await page.locator('one-appnav').click();
  });

  test('Contacts tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Kontakty' }).click();
    await page.locator('one-appnav').click();
  });

  test('Purchase Orders tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Zamówienia SPAR' }).click();
    await page.locator('one-appnav').click();
  });

  test('Approval Requests tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Prośby o zatwierdzenie' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Raporty' }).click();
    await page.locator('one-appnav').click();
  });
});
