import { test, expect } from '@playwright/test';

test.describe('Tabs', () => {
  test('Tabs visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';

    ///Act

    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Accounts' }).click();
    await page.locator('one-appnav').click();

    ///Assert
  });

  test('Contacts tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';
    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Accounts' }).click();
    await page.locator('one-appnav').click();
  });

  test('Leads tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';
    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.locator('one-appnav').click();
  });

  test('Opportunities tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';

    ///Act

    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Opportunities' }).click();
    await page.locator('one-appnav').click();
  });

  test('Tasks tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';
    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Tasks' }).click();
    await page.locator('one-appnav').click();
  });

  test('Calendar tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';
    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Calendar' }).click();
    await page.locator('one-appnav').click();
  });

  test('Dashboards tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';
    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Dashboards' }).click();
    await page.locator('one-appnav').click();
  });

  test('Reports tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';
    ///Act

    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Reports' }).click();
    await page.locator('one-appnav').click();
  });

  test('Notes tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';

    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Notes' }).click();
    await page.locator('one-appnav').click();
  });

  test('Groups tab visibility', async ({ page }) => {
    //Arrange
    const username = 'admin-bvrm@force.com.sebamaboxa';
    const password = 'Clorce9@';

    ///Act
    await page.goto('https://test.salesforce.com/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
    await page.getByRole('link', { name: 'Groups' }).click();
    await page.locator('one-appnav').click();
  });
});
