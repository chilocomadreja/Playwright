import { test, expect } from '@playwright/test';

test('Stworzenie nowego klienta', async ({ page }) => {
  const url = 'https://test.salesforce.com/';
  const login = 'ekspansjanormal@clorce.com.sebamaboxa';
  const password = 'Clorce2@';
  const projectNumber = '1234567';
  const firstName = 'Tomasz';
  const lastName = 'Luty';
  const mobileNumber = '666600821';
  const phoneNumber = '413522250';
  const companyName = 'Kalosze';
  const email = 'test@clorce.com';
  const regon = '12345';
  const krs = '1234';
  const nip = '1234';
  const comment = 'To jest test';

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
  await page.getByText('Corporate').click();
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
  //await page.getByText('Czeladź').click();
  ///Kontakt dodatkowy

  ///Lokalizacja
  await page.getByLabel('Powierzchnia działki (m2)').fill('22');
  await page.getByLabel('Powierzchnia do zabudowy (m2)').fill('10');
  await page.getByLabel('Powierzchnia sklepu brutto (m2)').fill('3');
  await page.getByLabel('Powierzchnia sali sprzedaży (m2)').fill('4');
  await page.getByLabel('Problem z dostępem / wyjściem').isChecked();
  await page.getByLabel('Parking', { exact: true }).fill('1');

  /// Ocena punktowa
  await page.getByLabel('Bezpośredni zjazd z drogi głównej').isChecked();
  await page.getByLabel('Doświadczony w FCMG?').isChecked();
  await page
    .getByRole('combobox', {
      name: 'Konkurencja w najbliższych 500m, --Brak--',
    })
    .click();
  //await page.getByRole('combobox', { name: 'Konkurencja w najbliższych 500m, 1' }).click();
  await page.getByRole('combobox', { name: 'Miejsca parkingowe, 3-5' }).click();
  await page.getByLabel('Koncesja na alkohol').isChecked();
  await page
    .getByRole('combobox', { name: 'Środki finansowe, --Brak--' })
    .click();
  //await page.getByRole('combobox', { name: 'Środki finansowe, Własne' }).click();

  ///Informacje adresowe
  //await page.getByRole('combobox', { name: 'Województwo, --Brak--' }).click();
  //await page.getByText('Województwo lubuskie').click();
  await page.getByLabel('Ulica').fill('cos');
  await page.getByLabel('Kod pocztowy').fill('31-444');
  await page.getByLabel('Miasto').fill('Lublin');
  await page.getByLabel('Województwo', { exact: true }).fill('lubuskie');
  await page.getByLabel('Kraj').fill('Polska');
  await page.getByLabel('Koordynaty działki').fill('dzialka');
  ///Informacje dodatkowe
  await page.getByLabel('Liczba pracowników').fill('3');
  await page.getByLabel('Przychód roczny').fill('3');
  await page.getByLabel('Strona Facebook').fill('www.facebook.com');
  await page.getByLabel('Witryna').fill('www.w.com');
  await page.getByLabel('Strona Instagram').fill('www.instagram.com');
  await page
    .getByRole('combobox', { name: 'Źródło potencjalnego klienta, --Brak--' })
    .click();
  await page.getByRole('combobox', { name: 'Branża, --Brak--' }).click();
  await page.getByLabel('Opis').fill('lol');

  await page.getByRole('button', { name: 'Zapisz i nowy element' }).click();

  await page.getByPlaceholder('Nazwisko').fill('Kowalski0206');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByLabel('*Firma').fill('Rak0206');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('button', { name: 'Zapisz', exact: true }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
});
