import { test, expect } from '@playwright/test';

test('Stworzenie nowego klienta', async ({ page }) => {
  const url = 'https://test.salesforce.com/';
  const login = 'ekspansjanormal@clorce.com.sebamaboxa';
  const password = 'Clorce2@';
  const projectNumber = '1234567';
  const firstName = 'Sebastian';
  const lastName = 'Marzec';
  const mobileNumber = '666600821';
  const phoneNumber = '413522250';
  const companyName = 'Parasole';
  const email = 'test@clorce.com';
  const regon = '12345';
  const krs = '1234';
  const nip = '1234';
  const comment = 'To jest test';
  const firstName2 = 'Tomasz';
  const lastName2 = 'Lis';
  const phone2 = '66677888';
  const email2 = 'test@xx.com';
  const salesFloorArena = '6';
  const firstName3 = 'Karol';
  const lastName3 = 'Kos';
  const phone3 = '36677883';
  const email3 = 'test2@xx.com';
  const plotArena = '1';

  await page.goto(url);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(login);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();

  await page.click('text=Potencjalni klienci');
  await page.click('text=Nowy element');
  ///Informacje o potencjalnym kliencie

  await page.getByLabel('Numer projektu').fill(projectNumber);
  await page
    .getByRole('textbox', { name: 'Tel. komórkowy' })
    .fill(mobileNumber);
  await page.getByPlaceholder('Imię', { exact: true }).fill(firstName);
  await page.getByRole('combobox', { name: 'Tytuł, --Brak--' }).click();
  await page.getByText('Pan', { exact: true }).click();
  await page.getByPlaceholder('Nazwisko').click();
  await page.getByPlaceholder('Nazwisko').fill(lastName);
  await page.getByLabel('*Firma').fill(companyName);
  await page.getByLabel('Mix najemców').fill('3');
  await page.getByRole('textbox', { name: 'E-mail' }).fill(email);
  await page.getByLabel('REGON').fill(regon);
  await page.getByLabel('KRS').fill(krs);
  await page.getByLabel('NIP').fill(nip);
  await page.getByLabel('Komentarz').fill(comment);
  await page.getByRole('combobox', { name: 'Typ sklepu, --Brak--' }).click();
  await page.getByTitle('SPAR', { exact: true }).click();
  await page
    .getByRole('combobox', { name: 'Typ potencjalnego klienta, --Brak--' })
    .click();
  await page.getByText('Działka').click();
  await page
    .getByRole('combobox', { name: 'Powód odrzucenia, --Brak--' })
    .click();
  await page.getByText('Za mały obiekt').click();
  await page
    .getByRole('combobox', { name: 'Magazyn logistyczny, --Brak--' })
    .click();
  await page.getByText('Czeladź').click();
  ///Kontakt dodatkowy

  
});
