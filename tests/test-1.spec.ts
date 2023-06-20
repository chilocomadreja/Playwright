import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.salesforce.com/');
  getByRole('link', { name: 'Potencjalni klienci' })
});