import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  //Arrange

  const url = 'https://test.salesforce.com/';
  const login = 'admin-bvrm@force.com.sebamaboxa';
  const password = 'Clorce9@';
  const projectNumber = '1234567';
  const firstName = 'Sebastian';
  const lastName = 'Marzec';
  const mobileNumber = '666600821';
  const phoneNumber = '413522250';
  const companyName = 'Parasole';
  const email = 'test@clorce.com';
  const regon = '12345';
  const krs = '1234';
  const nip = '1234';
  const comment = 'To jest test';
  const firstName2 = 'Tomasz';
  const lastName2 = 'Lis';
  const phone2 = '66677888';
  const email2 = 'test@xx.com';
  const salesFloorArena = '6';
  const firstName3 = 'Karol';
  const lastName3 = 'Kos';
  const phone3 = '36677883';
  const email3 = 'test2@xx.com';
  const plotArena = '1';

  ///Act

  await page.goto(url);
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(login);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByLabel('Project number').fill(projectNumber);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', { name: 'Salutation, --None--' }).click();
  await page.getByText('Mr.').click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByPlaceholder('Last Name').click();

  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('textbox', { name: 'Mobile' }).click();

  await page.getByRole('textbox', { name: 'Mobile' }).fill(mobileNumber);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('textbox', { name: 'Phone', exact: true }).click();

  await page
    .getByRole('textbox', { name: 'Phone', exact: true })
    .fill(phoneNumber);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('*Company').click();

  await page.getByLabel('*Company').fill(companyName);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();

  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('REGON').click();
  await page.getByLabel('REGON').fill(regon);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('KRS').click();
  await page.getByLabel('KRS').fill(krs);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('NIP').click();
  await page.getByLabel('NIP').fill(nip);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Comment').click();
  await page.getByLabel('Comment').fill(comment);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByRole('combobox', { name: 'Store type, --None--' }).click();
  await page.getByTitle('SPAR', { exact: true }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page
    .getByRole('combobox', { name: 'Type of potential customer, --None--' })
    .click();
  await page.getByText('Parcel').click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page
    .getByRole('combobox', { name: 'Rejection reason, --None--' })
    .click();
  await page.getByText('Small/No parking').click();

  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page
    .getByRole('combobox', { name: 'Logistics warehouse, --None--' })
    .click();
  await page.getByText('Czeladź').click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByLabel('First Name 2').fill(firstName2);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Last Name 2').fill(lastName2);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Phone 2').fill(phone2);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Email 2').fill(email2);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByLabel('First Name 3').fill(firstName3);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Last Name 3').fill(lastName3);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Phone 3').fill(phone3);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Email 3').fill(email3);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByLabel('Plot area').fill(plotArena);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Parking', { exact: true }).fill('1');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Buildable area').fill('2');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Gross store area (including warehouse)').fill('7');
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Sales floor area').fill(salesFloorArena);
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Access/Egress Issues').check();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByLabel('Direct exit from the main road').check();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Experienced in FMCG').click();
  await page.getByLabel('Experienced in FMCG').check();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();

  await page.getByRole('combobox', { name: 'Competition, --None--' }).click();
  await page.getByText('1', { exact: true }).click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Place ownership').click();
  await page.getByLabel('Place ownership').check();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page.getByLabel('Alcohol concession').click();
  await page.getByLabel('Alcohol concession').check();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page
    .getByRole('combobox', { name: 'Financial resources, --None--' })
    .click();
  await page.locator('records-modal-lwc-detail-panel-wrapper').click();
  await page
    .getByRole('combobox', { name: 'Financial resources, Mix' })
    .click();

    ///Assert

    
});
