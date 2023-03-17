import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://test.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin-bvrm@force.com.sebamaboxa');
  await page.getByLabel('Password').fill('Clorce9@');
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();


  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByLabel('Project number').fill('123');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByPlaceholder('First Name').fill('Sebastian');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', {  name: 'Salutation, --None--'  }).click();
  await page.getByText('Mr.').click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Marzec');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('textbox', { name: 'Mobile' }).click();
  await page.getByRole('textbox', { name: 'Mobile' }).fill('666666666');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('textbox', { name: 'Phone', exact: true }).click();
  await page.getByRole('textbox', { name: 'Phone', exact: true }).fill('123453434');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('*Company').click();
  await page.getByLabel('*Company').fill('Parasole');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test@clorce.com');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('REGON').click();
  await page.getByLabel('REGON').fill('12345');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  //await page.getByLabel('KRS').click();
  await page.getByLabel('KRS').fill('1234');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  //await page.getByLabel('NIP').click();
  await page.getByLabel('NIP').fill('1234');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  //await page.getByLabel('Comment').click();
  await page.getByLabel('Comment').fill('To jest test');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', { name: 'Store type, --None--' }).click();
  await page.getByTitle('SPAR', { exact: true }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', { name: 'Type of potential customer, --None--' }).click();
  await page.getByText('Local').click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', { name: 'Rejection reason, --None--' }).click();
  await page.getByRole('combobox', { name: 'Rejection reason, Too small' }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', { name: 'Logistics warehouse, --None--' }).click();
  await page.getByText('Czeladź').click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();




  
});