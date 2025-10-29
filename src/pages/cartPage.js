class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '[data-test="checkout"]';
    this.cartItem = '.cart_item';
    this.removeBtn = 'button:has-text("Remove")';
  }

  async isVisible() {
    return this.page.isVisible(this.cartItem);
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }

  async removeFirstItem() {
    await this.page.locator(this.removeBtn).first().click();
  }
}

module.exports = { CartPage };
