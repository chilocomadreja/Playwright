import { test, expect } from '@playwright/test';

test('weryfikacja PS - Delete records- mozliwosc usuniecia nieswojego rekordu', async ({
  page,
}) => {
  const url = 'https://test.salesforce.com/';
  const login = 'ekspansjanormal@clorce.com.sebamaboxa';
  const password = 'Clorce2@';

  await page.goto(url);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(login);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.click('text=Potencjalni klienci');
  ///nazwa leada musi być zawsze taka sama. Lead musi być wcześniej utworzony!!!!
  ///await page.click('text=Parasole');
  await page.getByRole('link', { name: 'Sebastian Marzec' }).click();
  //await page.click('text=Usuń');
  await page.getByRole('button', { name: 'Usuń' }).click();
  await page.click("//span[contains(text(),'Usuń')]");
  //await page.getByRole('button', { name: 'Usuń' }).click();

  ////dodanie asercji sprawdzającej czy usunęło
  //const komunikat3 = 'Sebastian Marzec';
 // expect(komunikat3).toContain('Sebastian Marzec');
});
