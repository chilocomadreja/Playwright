import { test, expect } from '@playwright/test';

test.describe('Menu: Finanse', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'dyrektorprawny@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce1@');
    await page.click('text=Log In to Sandbox');
  });

  test('Accounts', async ({ page }) => {
    await page.click('text=Konta');
    await page.locator('one-appnav').click();
  });

  test('Invoices', async ({ page }) => {
    await page.getByRole('link', { name: 'Faktury' }).click();
    await page.locator('one-appnav').click();
  });

  test('Import faktur', async ({ page }) => {
    await page.click('text=Import faktur');
    await page.locator('one-appnav').click();
  });

  test('Contacts', async ({ page }) => {
    await page.click('text=Kontakty');
    await page.locator('one-appnav').click();
  });

  test('Purchase Orders', async ({ page }) => {
    await page.getByRole('link', { name: 'Zamówienia SPAR' }).click();
    await page.locator('one-appnav').click({ timeout: 80000 });
  });

  test('Approval Requests', async ({ page }) => {
    await page.getByRole('link', { name: 'Prośby o zatwierdzenie' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports', async ({ page }) => {
    await page.getByRole('link', { name: 'Raporty' }).click();
    await page.locator('one-appnav').click();
  });
});
