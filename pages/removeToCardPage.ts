import { Page, Locator } from "@playwright/test";
export class RemoveToCard {
  readonly page: Page;
  elements = {
    removeButton: () => this.page.locator("button", { hasText: "Remove" }),
  };

  constructor(page: Page) {
    this.page = page;
  }

  async removeItem() {
    await this.elements.removeButton().click();
  }

  async isItemRemoved() {
    return !(await this.elements.removeButton().isVisible());
  }
}
