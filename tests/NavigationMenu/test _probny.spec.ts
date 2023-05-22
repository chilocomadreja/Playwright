import { test, expect } from '@playwright/test';

test.describe.parallel('Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'dyrektorekspansja@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce1@');
    await page.click('text=Log In to Sandbox');
  await page.getByRole('button', { name: 'Uruchamianie aplikacji' }).click();
  await page.getByRole('option', { name: 'Sprzedaż' }).click();
  await page.getByRole('link', { name: 'Klienci w procesie' }).click();
  await page.getByRole('link', { name: 'Konta', exact: true }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('link', { name: 'Kontakty' }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('link', { name: 'Zadania', exact: true }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('link', { name: 'Kalendarz', exact: true }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
  await page.getByRole('link', { name: 'Raporty' }).click();
  await page.getByRole('link', { name: 'Strona główna' }).click();
});