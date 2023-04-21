import { test, expect } from '@playwright/test';

test.describe.parallel.only('Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/')
  
  });

  test('Tabs visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';

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

  test('Contacts tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Kontakty' }).click();
    await page.locator('one-appnav').click();
  });

  test('Leads tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';

    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Potencjalni klienci' }).click();
    await page.locator('one-appnav').click();
  });

  test('Opportunities tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';

    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Klienci w procesie' }).click();
    await page.locator('one-appnav').click();
  });

  test('Tasks tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.click('text=Zadania');
    await page.locator('one-appnav').click();
  });

  test('Calendar tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Kalendarz' }).click();
    await page.locator('one-appnav').click();
  });

  test('Dashboards tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';
    ///Act

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Pulpity' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports tab visibility', async ({ page }) => {
    //Arrange
    const username = 'ekspansjainteg@clorce.com.sebamaboxa';
    const password = 'Clorce1@';
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
