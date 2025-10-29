const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/loginPage');
const { ProductsPage } = require('../src/pages/productsPage');

test('add to cart updates cart badge', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addItemByName('Sauce Labs Backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});
