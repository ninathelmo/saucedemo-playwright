class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://www.saucedemo.com/';
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.error = '[data-test="error"]';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

  async getError() {
    return this.page.locator(this.error).innerText();
  }
}

module.exports = { LoginPage };
