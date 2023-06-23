import { test, expect } from '@playwright/test';

test.describe.skip('Walidacja pól w formularzu Potencjalny Klient', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('błędny nr tel. komórkowy', async ({ page }) => {
    await page.click('text=Potencjalni klienci');

    await page.click('text=Nowy element');
    ///Informacje o potencjalnym kliencie

    await page.getByLabel('Numer projektu').fill('777');
    await page.getByPlaceholder('Nazwisko').click();
    await page.getByPlaceholder('Nazwisko').fill('lastName');
    await page.getByLabel('*Firma').fill('companyName');
    await page.getByRole('textbox', { name: 'Tel. komórkowy' }).fill('test');

    const komunikat4 =
      'Pole tel.komórkowy może zawierać tylko cyfry lub powinno pozostać puste!Sprawdź ponownie te pole, a następnie wpisz właściwe dane.';
    expect(komunikat4).toContain(
      'Pole tel.komórkowy może zawierać tylko cyfry lub powinno pozostać puste!Sprawdź ponownie te pole, a następnie wpisz właściwe dane.'
    );
  });

  test('błędny adres mailowy', async ({ page }) => {
    await page.click('text=Potencjalni klienci');

    await page.click('text=Nowy element');
    ///Informacje o potencjalnym kliencie

    await page.getByLabel('Numer projektu').fill('777');
    await page.getByPlaceholder('Nazwisko').click();
    await page.getByPlaceholder('Nazwisko').fill('lastName');
    await page.getByLabel('*Firma').fill('companyName');
    await page
      .getByRole('textbox', { name: 'Tel. komórkowy' })
      .fill('666777888');
    await page.getByRole('textbox', { name: 'E-mail' }).fill('1234');

    const komunikat5 = 'Napotkaliśmy nieoczekiwaną przeszkodę.';
    expect(komunikat5).toContain('Napotkaliśmy nieoczekiwaną przeszkodę.');

    const komunikat6 =
      'Napotkaliśmy nieoczekiwaną przeszkodę. Sprawdź następujące pola';
    expect(komunikat6).toContain(
      'Napotkaliśmy nieoczekiwaną przeszkodę. Sprawdź następujące pola'
    );
  });

  test('Zapis Potencjalnego KLienta', async ({ page }) => {
    const projectNumber = '1234567';
    const firstName = 'Kajetan';
    const lastName = 'Koc';
    const mobileNumber = '664324123';
    const phoneNumber = '413522250';
    const companyName = 'Barber';
    const email = 'test1@clorce.com';
    const regon = '12345999';
    const krs = '1234999';
    const nip = '1234999';
    const comment = 'To jest test';

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
});
