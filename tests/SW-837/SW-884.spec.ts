import { test, expect } from '@playwright/test';

test.describe('Napisanie wiadomości w Chatter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('Wiadomość', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);

    await page.getByRole('tab', { name: 'Chatter' }).click();

    await page.getByTitle('Wpisz tekst...').click();
    await page.locator('.ql-editor').fill('testowy tekst.');
    await page.getByTitle('Kliknij lub naciśnij klawisze Ctrl i Enter').click();
  });

  test('wrzucenie pliku', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Chatter' }).click();

    await page.getByText('Załącz pliki z dysku', { exact: true }).click();
    await page.getByLabel('Załącz pliki z dyskuLub upuść pliki');

    const filePath = 'tests/UploadItems/Serials.txt';
    await page.setInputFiles('input[type=file]', filePath);

    await page.getByRole('button', { name: 'Gotowe' }).click();
  });
});
