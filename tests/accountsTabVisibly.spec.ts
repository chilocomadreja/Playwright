import { test, expect } from '@playwright/test';


test.describe('Tabs visibly' , () => {
test('Account tab visibly', async ({ page }) => {
//Arrange



  ///Act

  await page.goto('https://test.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Clorce9@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.locator('one-appnav').click();

///Assert


});

  test('Contacts tab visibly', async ({ page }) => {
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('Clorce9@');
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Accounts' }).click();
    await page.locator('one-appnav').click();
  });

    test('Leads tab visibly', async ({ page }) => {
      await page.goto('https://test.salesforce.com/');
      await page.getByLabel('Username').click();
      await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
      await page.getByLabel('Password').click();
      await page.getByLabel('Password').fill('Clorce9@');
      await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
      await page.getByRole('link', { name: 'Leads' }).click();
      await page.locator('one-appnav').click();
    });

      test('Opportunities tab visibly', async ({ page }) => {
        await page.goto('https://test.salesforce.com/');
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill('Clorce9@');
        await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
        await page.getByRole('link', { name: 'Opportunities' }).click();
        await page.locator('one-appnav').click();




});});
