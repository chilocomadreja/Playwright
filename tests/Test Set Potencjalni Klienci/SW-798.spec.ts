import { test, expect } from '@playwright/test';

test('weryfikacja uzupelnienia wymaganych pol na Formularzu tworzenia', async ({
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
  await page.getByRole('button', { name: 'Zapisz', exact: true }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  const komunikat = 'Napotkaliśmy nieoczekiwaną przeszkodę.';
  expect(komunikat).toContain('Napotkaliśmy nieoczekiwaną przeszkodę.');
});
