import { test, expect } from '@playwright/test';

test('weryfikacja PS - Data entry basic user - tworzenie leada', async ({
  page,
}) => {
  const url = 'https://test.salesforce.com/';
  const login = 'ekspansjabasic@clorce.com.sebamaboxa';
  const password = 'Clorce1@';

  await page.goto(url);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(login);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.click('text=Potencjalni klienci');
  await page.click('text=Nowy element');
  await page.getByPlaceholder('Nazwisko').fill('Kowalski');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByLabel('*Firma').fill('Rak');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('button', { name: 'Zapisz', exact: true }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
});
