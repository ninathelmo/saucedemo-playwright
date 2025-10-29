const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/pages/loginPage');

test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
  });

  test('successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('invalid credentials shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('bad_user', 'bad_pass');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
