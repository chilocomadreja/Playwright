import { test, expect } from '@playwright/test';
test('formlead', async ({ page }) => {
  const window = await page.locator(
    'div.modal-container.slds-modal__container'
  );
  const addressInput = await page.locator('input[placeholder="Wyszukaj adres"]');
  await page.goto('https://test.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(loginData.login);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(loginData.password);
  await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
  await page.click('text=Potencjalni klienci');
  await page.click("a[title='Nowy element']", { delay: 500 });
  await expect(window).toBeVisible();
  // basic information
  await page.getByLabel('Numer projektu').fill(testData.projectNumber);
  await page.getByRole('combobox', { name: 'Tytuł, --Brak--' }).click();
  await page
    .getByRole('option', { name: testData.leadTitile, exact: true })
    .locator('span')
    .nth(2)
    .click();
  await page.getByPlaceholder('Imię', { exact: true }).fill(testData.leadName);
  await page
    .getByLabel('Drugie imię', { exact: true })
    .fill(testData.leadSecondName);
  await page
    .getByPlaceholder('Nazwisko', { exact: true })
    .fill(testData.leadName);
  await page.getByLabel('Przyrostek').fill(testData.leadSuffix);
  await page.getByLabel('*Firma').fill(testData.firmName);
  await page.getByLabel('Mix najemców').fill(testData.mixOfTenants);
  await page.getByRole('combobox', { name: 'Typ sklepu, --Brak--' } ).click();
  // await page.waitForTimeout(35000);
  await page.getByText('Corporate').click();
  // await page.getByRole('combobox', { name: 'Typ sklepu, --Brak--' }).click();
  // // await page.getByText(testData.storeType).click();
  // await page
  //   .getByRole('option', { name: testData.storeType, exact: true })
  //   .locator('span')
  //   .nth(1)
  //   .click();
  // await page.getByRole('combobox', { name: 'Format sklepu, --Brak--' }).click();
  // await page
  //   .getByRole('option', { name: testData.storeFormat, exact: true })
  //   .locator('span')
  //   .nth(1)
  //   .click();
  // await page
  //   .getByRole('combobox', { name: 'Typ potencjalnego klienta, --Brak--' })
  //   .click();
  // await page
  //   .getByRole('option', { name: testData.clientType, exact: true })
  //   .locator('span')
  //   .nth(1)
  //   .click();
  // await page
  //   .getByRole('combobox', { name: 'Powód odrzucenia, --Brak--' })
  //   .click();
  // await page
  //   .getByRole('option', { name: testData.reasonForRejection, exact: true })
  //   .locator('span')
  //   .nth(2)
  //   .click();
  // await page
  //   .getByRole('combobox', { name: 'Magazyn logistyczny, --Brak--' })
  //   .click();
  // await page
  //   .getByRole('option', { name: testData.warehouse, exact: true })
  //   .locator('span')
  //   .nth(1)
  //   .click();
  // await page
  //   .locator('input[name="Non_disclosure_agreement__c"]')
  //   .fill(testData.trustAgreement);
  // await page
  //   .getByRole('combobox', { name: 'Stan potencjalnego klienta, Nowy' })
  //   .click();
  // await page
  //   .getByRole('option', { name: testData.potentialClient, exact: true })
  //   .locator('span')
  //   .nth(2)
  //   .click();
  // await page.locator('input[name="MobilePhone"]').fill(testData.mobilePhone);
  // await page.locator('input[name="Phone"]').fill(testData.phoneNumber);
  // await page.locator('input[name="Email"]').fill(testData.email);
  // await page.locator('input[name="REGON__c"]').fill(testData.regon);
  // await page.locator('input[name="KRS__c"]').fill(testData.krs);
  // await page.locator('input[name="NIP__c"]').fill(testData.nip);
  // await page
  //   .locator(
  //     '[data-target-selection-name="sfdc:RecordField.Lead.Comment__c"] textarea'
  //   )
  //   .fill(testData.comment);
  // // contact1
  // await page
  //   .locator(
  //     '[data-target-selection-name="sfdc:RecordField.Lead.First_Name_2__c"] textarea'
  //   )
  //   .fill(testData.firstContactName);
  // await page
  //   .locator(
  //     '[data-target-selection-name="sfdc:RecordField.Lead.Last_Name_2__c"] textarea'
  //   )
  //   .fill(testData.firstContactSurname);
  // await page
  //   .locator('input[name="Phone_2__c"]')
  //   .fill(testData.firstContactPhone);
  // await page
  //   .locator('input[name="Email_2__c"]')
  //   .fill(testData.firstContactEmail);
  // // contact2
  // await page
  //   .locator(
  //     '[data-target-selection-name="sfdc:RecordField.Lead.First_Name_3__c"] textarea'
  //   )
  //   .fill(testData.secondContactName);
  // await page
  //   .locator(
  //     '[data-target-selection-name="sfdc:RecordField.Lead.Last_Name_3__c"] textarea'
  //   )
  //   .fill(testData.secondContactSurname);
  // await page
  //   .locator('input[name="Phone_3__c"]')
  //   .fill(testData.secondContactPhone);
  // await page
  
});
});