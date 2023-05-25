import { test, expect } from '@playwright/test';

test.describe.parallel('Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'dyrektorekspansja@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce1@');
    await page.click('text=Log In to Sandbox');
  });

  test('Tabs visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Konta', exact: true }).click();
  });

  test('Contacts tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Kontakty' }).click();
    await page.locator('one-appnav').click();
  });

  test('Leads tab visibility', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
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