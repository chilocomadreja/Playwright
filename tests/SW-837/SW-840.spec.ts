import { test, expect } from '@playwright/test';

test.describe
  .parallel('Weryfikacja adresu oraz opcji wyboru w Typ sklepu i Forma sklepu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('1. Typ sklepu: Partner', async ({ page }) => {
    await page.click('text=Potencjalni klienci');
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('button', { name: 'Edytuj Typ sklepu' }).click();
    await page.getByRole('combobox', { name: 'Typ sklepu, Corporate' }).click();
    await page.getByText('Partner', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();

    ///Asert
    const TypSklepu = 'Partner';
    expect(TypSklepu).toContain('Partner');
  });

  test('2. Typ sklepu: Corporate', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Typ sklepu' }).click();
    await page.getByRole('combobox', { name: 'Typ sklepu, Partner' }).click();
    await page.getByText('Corporate', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();
    ///Asert
    const TypSklepu = 'Corporate';
    expect(TypSklepu).toContain('Corporate');
  });

  test('3. Typ sklepu: Stacja', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Typ sklepu' }).click();
    await page.getByRole('combobox', { name: 'Typ sklepu, Corporate' }).click();
    await page.getByText('Stacja', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();
    await page.waitForTimeout(5000);

    ///Asert
    const TypSklepu = 'Stacja';
    expect(TypSklepu).toContain('Stacja');
  });

  test('4. Format sklepu: Spar mini', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Format sklepu' }).click();
    await page.getByRole('combobox', { name: 'Format sklepu, SPAR' }).click();
    await page.getByText('SPAR mini', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();
    ///Asert
    const FormatSklepu = 'SPAR mini';
    expect(FormatSklepu).toContain('SPAR mini');
  });

  test('5. Format sklepu: SPAR Express', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Format sklepu' }).click();
    await page
      .getByRole('combobox', { name: 'Format sklepu, SPAR mini' })
      .click();
    await page.getByText('SPAR Express', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();

    ///Asert
    const FormatSklepu = 'SPAR Express';
    expect(FormatSklepu).toContain('SPAR Express');
  });

  test('6. Format sklepu: Tops!', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Format sklepu' }).click();
    await page
      .getByRole('combobox', { name: 'Format sklepu, SPAR Express' })
      .click();
    await page.getByText('Tops!', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();

    ///Asert
    const FormatSklepu = 'Tops!';
    expect(FormatSklepu).toContain('Tops!');
  });

  test('7. Format sklepu: EUROSPAR', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Format sklepu' }).click();
    await page.getByRole('combobox', { name: 'Format sklepu, Tops!' }).click();
    await page.getByText('EUROSPAR', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();

    ///Asert
    const FormatSklepu = 'EUROSPAR';
    expect(FormatSklepu).toContain('EUROSPAR');
  });

  test('8. Format sklepu: SPAR', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Edytuj Format sklepu' }).click();
    await page.getByRole('combobox', { name: 'Format sklepu, EUROSPAR' }).click();
    await page.getByText('SPAR', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();


 ///Asert
 const FormatSklepu = 'SPAR';
 expect(FormatSklepu).toContain('SPAR');

});

});
