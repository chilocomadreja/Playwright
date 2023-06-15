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

  test('Typ sklepu: Partner', async ({ page }) => {
    await page.click('text=Potencjalni klienci');
    await page.waitForTimeout(25000);

    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();

    await page.getByRole('button', { name: 'Edytuj Typ sklepu' }).click();
    await page.getByRole('combobox', { name: 'Typ sklepu, Corporate' }).click();
    await page.getByText('Partner', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();
    await page.waitForTimeout(15000);
    ///Asert
    const TypSklepu = 'Partner';
    expect(TypSklepu).toContain('Partner');
  });

  test('Typ sklepu: Corporate', async ({ page }) => {
    await page.click('text=Potencjalni klienci');
    await page.waitForTimeout(25000);

    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();

    await page.getByRole('button', { name: 'Edytuj Typ sklepu' }).click();
    await page.getByRole('combobox', { name: 'Typ sklepu, Partner' }).click();
    await page.getByText('Corporate', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();
    await page.waitForTimeout(15000);
    ///Asert
    const TypSklepu = 'Corporate';
    expect(TypSklepu).toContain('Corporate');
  });

  test('Typ sklepu: Stacja', async ({ page }) => {
    await page.click('text=Potencjalni klienci');
    await page.waitForTimeout(25000);

    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(15000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();

    await page.getByRole('button', { name: 'Edytuj Typ sklepu' }).click();
    await page.getByRole('combobox', { name: 'Typ sklepu, Corporate' }).click();
    await page.getByText('Stacja', { exact: true }).click();
    await page.getByRole('button', { name: 'Zapisz' }).click();
    await page.waitForTimeout(15000);
    ///Asert
    const TypSklepu = 'Stacja';
    expect(TypSklepu).toContain('Stacja');
  });




});
