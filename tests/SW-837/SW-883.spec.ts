import { test, expect } from '@playwright/test';

test.describe.skip('Widoczność zakłądek na POtencjalnym Kliencie', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('Widok zakładek', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
  });

  const Czynność = 'Czynność';
  expect(Czynność).toContain('Czynność');

  const Szczegóły = 'Szczegóły';
  expect(Szczegóły).toContain('Szczegóły');

  const Chatter = 'Chatter';
  expect(Chatter).toContain('Chatter');

  const ZadaniaZZ = 'Zadanie z załącznikiem';
  expect(ZadaniaZZ).toContain('Zadanie z załącznikiem');
});
