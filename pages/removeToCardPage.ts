import { Page, Locator } from "@playwright/test";
export class RemoveToCard {
  readonly page: Page;
  readonly removeButton: Locator;
  elements = {
    removeButton: () => this.page.locator("button", { hasText: "Remove" }),
    addToCartButton: () => this.page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]'),
  };

  constructor(page: Page) {
    this.page = page;
  }
  async addToCart() {
    await this.elements.addToCartButton().click();
  }

  async removeItem() {
    await this.elements.removeButton().click();
  }


  async isItemRemoved() {
    return !(await this.elements.removeButton().isVisible());
  }
}
