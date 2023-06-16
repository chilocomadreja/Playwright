import { test, expect } from '@playwright/test';

test.describe.parallel('Weryfikacja zaleceń gwarantujących sukces', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'ekspansjanormal@clorce.com.sebamaboxa');
    await page.type('#password', 'Clorce2@');
    await page.click('text=Log In to Sandbox');
  });

  test('1. Nowy', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);

    ///Asert
    const Zalecenia =
      'Przypisz potencjalnego klienta do przedstawiciela';
    expect(Zalecenia).toContain(
      'Przypisz potencjalnego klienta do przedstawiciela'
    );

    const Zalecenia2 =
    'Zbierz kluczowe informacje o potencjalnym kliencie od firmy strona internetowa';
  expect(Zalecenia2).toContain(
    'Zbierz kluczowe informacje o potencjalnym kliencie od firmy strona internetowa'
  );


  const Zalecenia3 =
    'Utwórz plan budowania połączenia z tym potencjalnym klientem';
  expect(Zalecenia3).toContain(
    'Utwórz plan budowania połączenia z tym potencjalnym klientem'
  );

  const Zalecenia4 =
    'Określ, którzy potencjalni klienci są kwalifikowani lub niekwalifikowani.';
  expect(Zalecenia4).toContain(
    'Określ, którzy potencjalni klienci są kwalifikowani lub niekwalifikowani.'
  );

  const Zalecenia5 =
  'Zalecenia gwarantujące sukces';
expect(Zalecenia5).toContain(
  'Zalecenia gwarantujące sukces'
);

  });

  test('2. Wstępna analiza', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);
   await page.click('text="Wstępna analiza"');



    const Zalecenia1 =
    'Zalecenia gwarantujące sukces';
  expect(Zalecenia1).toContain(
    'Zalecenia gwarantujące sukces')

    const Zalecenia2 =
    'Podpisanie umowy o poufności z potencjalnym Partnerem. Przygotowanie wstępnej koncepcji sklepu. Negocjacje warunków wejścia potencjalnego Partnera do sieci.';
  expect(Zalecenia2).toContain(
    'Podpisanie umowy o poufności z potencjalnym Partnerem. Przygotowanie wstępnej koncepcji sklepu. Negocjacje warunków wejścia potencjalnego Partnera do sieci.')


  });

  test('3. Niezakwalifikowny', async ({ page }) => {
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('link', { name: 'Janusz Lech' }).click();
    await page.waitForTimeout(5000);

    await page.click('text="Niezakwalifikowany"');


    const Zalecenia1 =
    'Zalecenia gwarantujące sukces';
  expect(Zalecenia1).toContain(
    'Zalecenia gwarantujące sukces')

    const Zalecenia2 =
    'Śledź informacje dotyczące niewykwalifikowanych potencjalnych klientów.';
  expect(Zalecenia2).toContain(
    'Śledź informacje dotyczące niewykwalifikowanych potencjalnych klientów.')

    const Zalecenia3 =
    'Twój potencjalny klient może nie mieć kwalifikacji, jeśli nie jest zainteresowany Twoimi produktami lub opuścił firmę powiązaną z potencjalnym klientem.';
  expect(Zalecenia3).toContain(
    'Twój potencjalny klient może nie mieć kwalifikacji, jeśli nie jest zainteresowany Twoimi produktami lub opuścił firmę powiązaną z potencjalnym klientem.')


    const Zalecenia4 =
    'Dokumentuj zdobyte doświadczenia do wykorzystania w przyszłości';
  expect(Zalecenia4).toContain(
    'Dokumentuj zdobyte doświadczenia do wykorzystania w przyszłości')

    const Zalecenia5 =
    'Zapisz szczegóły zasięgu i informacje kontaktowe ';
  expect(Zalecenia5).toContain(
    'Zapisz szczegóły zasięgu i informacje kontaktowe ')
  });
  
});
