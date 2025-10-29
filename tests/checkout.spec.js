const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/loginPage');
const { ProductsPage } = require('../src/pages/productsPage');

test('checkout happy path', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addItemByName('Sauce Labs Backpack');
  await products.openCart();

  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'Nina');
  await page.fill('[data-test="lastName"]', 'T');
  await page.fill('[data-test="postalCode"]', '1000');
  await page.click('[data-test="continue"]');

  await expect(page.locator('.summary_info')).toBeVisible();
  await page.click('[data-test="finish"]');
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
});
