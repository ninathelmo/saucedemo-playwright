class ProductsPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = '.inventory_list';
    this.item = '.inventory_item';
    this.cartLink = '.shopping_cart_link';
  }

  async isVisible() {
    return this.page.isVisible(this.inventoryList);
  }

  async addItemByName(name) {
    const card = this.page.locator(this.item).filter({ hasText: name }).first();
    await card.locator('button').click();
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { ProductsPage };
