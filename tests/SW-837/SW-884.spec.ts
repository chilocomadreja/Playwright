import { test, expect } from '@playwright/test';

test.describe.parallel('Napisanie wiadomości w Chatter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('Napisanie wiadomości', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('tab', { name: 'Chatter' }).click();

    await page.getByTitle('Wpisz tekst...').click();
    await page.locator('.ql-editor').fill('testowy tekst.');
    await page.getByTitle('Kliknij lub naciśnij klawisze Ctrl i Enter').click();
  });

  test('Załączenie pliku', async ({ page }) => {
  

    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Chatter' }).click();

    await page.click(
      '.slds-file-selector__button.slds-button.slds-button_neutral'
    );
    // Wybierz plik
    const input = await page.$('input[type=file]');
  if (input === null) {
    console.error('Nie znaleziono elementu input.');
    
    return;
  }
    await input.setInputFiles('UploadItems/Serials.txt');
    await page.waitForTimeout(2000);

    // await page.getByText('Załącz pliki z dysku', { exact: true }).click();
    // await page.getByLabel('Załącz pliki z dyskuLub upuść pliki');
    // await page.setInputFiles(".slds-file-selector__button slds-button slds-button_neutral"),
    // ["UploadItems/Serials.txt"])

    //    await page.setInputFiles('.slds-file-selector__button.slds-button.slds-button_neutral']",
    //  ["tests\UploadItems\Serials.txt"]);

    //await page.getByRole('button', { name: 'Gotowe' }).click();
  });
});
