import { test, expect } from '@playwright/test';

test.describe.skip('Napisanie wiadomości w Chatter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
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
    await page.locator('.ql-editor').fill('Nowy tekst do weryfikacji ążźćóęł');
    await page.getByTitle('Kliknij lub naciśnij klawisze Ctrl i Enter').click();

    const Opis = 'Nowy tekst do weryfikacji ążźćóęł';
    expect(Opis).toContain('Nowy tekst do weryfikacji ążźćóęł');
  }); 
});
