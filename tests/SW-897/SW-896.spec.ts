import { test, expect } from '@playwright/test';

test.describe('Weryfikacja widoczności załączników cz. II', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('1. Potencjalny Klient-utworzenie', async ({ page }) => {
    const projectNumber = '4444466677';
    const firstName = 'Adam';
    const lastName = 'Raz';
    const mobileNumber = '666777432';
    const phoneNumber = '513522250';
    const companyName = 'Jajko98';
    const email = 'test13987@clorce.com';
    const regon = '8743565679';
    const krs = '1231234321';
    const nip = '768543554';
    const comment = 'To jest test888';

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
      .getByRole('combobox', { name: 'Format sklepu, --Brak--' })
      .click();
    await page.getByText('SPAR', { exact: true }).click();
    await page
      .getByRole('combobox', { name: 'Powód odrzucenia, --Brak--' })
      .click();
    await page
      .getByRole('option', { name: 'Za mały obiekt' })
      .locator('span')
      .nth(1)
      .click();
    await page
      .getByRole('combobox', { name: 'Magazyn logistyczny, --Brak--' })
      .click();
    //await page.getByRole('option', { name: 'Czeladź' }).locator('span').nth(1).click();
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
    await page
      .getByRole('combobox', { name: 'Miejsca parkingowe, 3-5' })
      .click();
    await page.getByLabel('Koncesja na alkohol').isChecked();
    await page
      .getByRole('combobox', { name: 'Środki finansowe, --Brak--' })
      .click();
    //await page.getByRole('combobox', { name: 'Środki finansowe, Własne' }).click();

    ///Informacje adresowe
    //await page.getByRole('combobox', { name: 'Województwo, --Brak--' }).click();
    //await page.getByText('Województwo lubuskie').click();
    await page.getByLabel('Ulica').fill('Mogilska');
    await page.getByLabel('Kod pocztowy').fill('31-444');
    await page.getByLabel('Miasto').fill('Kraków');
    await page.getByLabel('Województwo', { exact: true }).fill('Małopolskie');
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
    await page.getByRole('button', { name: 'Zapisz', exact: true }).click();
  });

  test('2. Zadanie z załącznikiem- widok', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Adam Raz' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('tab', { name: 'Zadanie z załącznikiem' }).click();


    await page.locator('#input-326').click();
    await page.locator('#input-326').fill('lol');
    await page.locator('#input-330').click();
    await page.locator('#input-330').fill('lol2');
    await page.getByPlaceholder('Szukaj w: Ludzie...').click();
    await page.getByText('Ekspansja Normal Test', { exact: true }).click();
    await page.locator('#input-342').click();
    await page.getByText('3', { exact: true }).nth(1).click();
    await page.locator('#file-selector-label-346').getByText('Załącz pliki z dysku').click();


  });
});
