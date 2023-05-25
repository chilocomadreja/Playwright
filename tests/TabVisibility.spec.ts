import { test, expect } from '@playwright/test';

test.describe.parallel('Menu Sprzedaz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');
  });

  test('Accounts', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';

    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.click('text=Konta');
    await page.locator('one-appnav').click();

    ///Assert
  });

  test('Contacts', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Kontakty' }).click();
    await page.locator('one-appnav').click();
  });

  test('Leads', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';

    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.locator('one-appnav').click();
  });

  test('Opportunities', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';

    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Klienci w procesie' }).click();
    await page.locator('one-appnav').click();
  });

  test('Tasks', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Zadania', exact: true }).click();
    await page.locator('one-appnav').click();
  });

  test('Calendar', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Kalendarz', exact: true }).click();
    await page.locator('one-appnav').click();
  });

  test('Dashboards', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Pulpity' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce5@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Raporty' }).click();
    await page.locator('one-appnav').click();
  });
});
