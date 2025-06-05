const { test, expect } = require('@playwright/test');

test('home page loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=Store')).toBeVisible();
  await expect(page.locator('text=Example Product')).toBeVisible();
});
