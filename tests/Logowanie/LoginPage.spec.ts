import { test, expect } from '@playwright/test';

test.describe.parallel('Login to sandbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://test.salesforce.com/');
  });

  test('Show error message', async ({ page }) => {
    await page.click('text=Log In to Sandbox');

    await page.click('text=Log In to Sandbox');
  });

  test('Negative scenario', async ({ page }) => {
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'invalid username');
    await page.type('#password', 'invalid password');
    await page.click('text=Log In to Sandbox');

    const ErrorMessage = await page.locator('#error');
    await expect(ErrorMessage).toContainText(
      "Please check your username and password. If you still can't log in, contact your Salesforce administrator."
    );
  });

  test('Positive scenario', async ({ page }) => {
    await page.click('text=Log In to Sandbox');
    await page.type('#username', 'admin-bvrm@force.com.sebamaboxa');
    await page.type('#password', 'Clorce5@');
    await page.click('text=Log In to Sandbox');

    const icon = await page.locator('.branding-userProfile-button');
    await expect(page).toHaveURL(
      'https://spar--sebamaboxa.sandbox.lightning.force.com/lightning/page/home'
    );

    await expect(icon).toBeVisible({ timeout: 80000 });
    await page.click('.branding-userProfile-button');
    await page.click('.profile-link-label.logout.uiOutputURL');
    await expect(page).toHaveURL(
      'https://spar--sebamaboxa.sandbox.my.salesforce.com/'
    );

    
  });

});