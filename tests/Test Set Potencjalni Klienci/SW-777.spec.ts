import { test, expect } from '@playwright/test';

test.only('weryfikacja PS - Delete records- tworzenie leada', async ({
  page,
}) => {
  const url = 'https://test.salesforce.com/';
  const login = 'ekspansjadeleteb2b@clorce.com.sebamaboxa';
  const password = 'Clorce3@';

  await page.goto(url);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(login);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('link', { name: 'Klienci w procesie' }).click();
  await page.locator('one-appnav').click();

  const selector = 'div[title="Nowy element"]';

  const element = await page.$(selector);
  await expect(element).toBeNull();
});
