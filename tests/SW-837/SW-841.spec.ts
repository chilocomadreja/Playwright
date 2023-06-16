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

  test('Infotip: Numer projektu', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.getByRole('button', { name: 'Pomoc Numer projektu' }).click();

    ///Asert
    const Infotip =
      'Określa nadany wewnętrznie numer procedowanej lokalizacji.';
    expect(Infotip).toContain(
      'Określa nadany wewnętrznie numer procedowanej lokalizacji.'
    );
  });

  test('Infotip: Właściciel potencjalnego klienta', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page
      .getByRole('button', { name: 'Pomoc Właściciel potencjalnego klienta' })
      .click();
    ///Asert
    const Infotip = 'Osoba odpowiedzialna za ten lead/lokalizację.';
    expect(Infotip).toContain('Osoba odpowiedzialna za ten lead/lokalizację.');
  });

  test('Infotip: Firma', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.getByRole('button', { name: 'Pomoc Firma' }).click();

    ///Asert
    const Infotip = 'Tutaj należy podać nazwę firmy widoczną w rejestrze KRS.';
    expect(Infotip).toContain(
      'Tutaj należy podać nazwę firmy widoczną w rejestrze KRS.'
    );
  });

  test('Infotip: Data uruchomienia', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.getByRole('button', { name: 'Pomoc Data uruchomienia' }).click();

    ///Asert
    const Infotip =
      'Przewidywany okres startu danej lokalizacji, np. 1Q2023 (pierwszy kwartał 2023 roku).';
    expect(Infotip).toContain(
      'Przewidywany okres startu danej lokalizacji, np. 1Q2023 (pierwszy kwartał 2023 roku).'
    );
  });

  test('Infotip: Umowa o zachowaniu poufności', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page
      .getByRole('button', { name: 'Pomoc Umowa o zachowaniu poufności' })
      .click();

    ///Asert
    const Infotip = 'Data podpisania umowy o zachowaniu poufności.';
    expect(Infotip).toContain('Data podpisania umowy o zachowaniu poufności.');
  });

  test('Infotip: Problem z dostępem / wyjściem', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page
      .getByRole('button', { name: 'Pomoc Problem z dostępem / wyjściem' })
      .click();

    ///Asert
    const Infotip = 'Czy istnieją problemy z wejściem do lokalu?';
    expect(Infotip).toContain('Czy istnieją problemy z wejściem do lokalu?');
  });

  test('Infotip: Konkurencja w najbliższych 500m', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page
      .getByRole('button', { name: 'Pomoc Konkurencja w najbliższych 500m' })
      .click();

    ///Asert
    const Infotip =
      'Ile sklepów znajduje się w obszarze 500 metrów od naszej lokalizacji?';
    expect(Infotip).toContain(
      'Ile sklepów znajduje się w obszarze 500 metrów od naszej lokalizacji?'
    );
  });

  test('Infotip: Przychód roczny', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.getByRole('button', { name: 'Pomoc Przychód roczny' }).click();
  });

  ///Asert
  const Infotip2 =
    'Przewidywany przybliżony roczny przychód z danej lokalizacji (wstępny estymat).';
  expect(Infotip2).toContain(
    'Przewidywany przybliżony roczny przychód z danej lokalizacji (wstępny estymat).'
  );

  test('Infotip: Branża', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('tab', { name: 'Szczegóły' }).click();
    await page.getByRole('button', { name: 'Pomoc Przychód roczny' }).click();
  });

  ///Asert
  const Infotip3 = 'W jakiej obecnie branży pracuje osoba z którą rozmawiamy?';
  expect(Infotip3).toContain(
    'W jakiej obecnie branży pracuje osoba z którą rozmawiamy?'
  );
});
