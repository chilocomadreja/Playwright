import { test, expect } from '@playwright/test';

test('weryfikacja', async ({
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
  });
