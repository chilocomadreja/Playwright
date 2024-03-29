import { test, expect } from '@playwright/test';

test('weryfikacja PS - Delete records- mozliwosc usuniecia nieswojego rekordu', async ({
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
  await page.click('text=Potencjalni klienci');
  ///nazwa leada musi być zawsze taka sama. Lead musi być wcześniej utworzony!!!!
  await page.click('text=Margarita Lenowo');
  await page.click('text=Usuń');
  await page.click("//span[contains(text(),'Usuń')]");

  const komunikat2 = 'Wystąpił problem podczas zapisywania tego rekordu. Możliwe, że nie masz uprawnień do jego edycji lub został on usunięty lub zarchiwizowany. Skontaktuj się z administratorem, aby uzyskać pomoc..';
  expect(komunikat2).toContain('Wystąpił problem podczas zapisywania tego rekordu. Możliwe, że nie masz uprawnień do jego edycji lub został on usunięty lub zarchiwizowany. Skontaktuj się z administratorem, aby uzyskać pomoc..');
});
