import { test, expect } from '@playwright/test';

test.describe.parallel('StworzeniePotencjalnegoKlienta', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');

    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');

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
});
