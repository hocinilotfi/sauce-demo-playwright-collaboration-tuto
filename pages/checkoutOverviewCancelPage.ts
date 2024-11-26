import { Page, Locator } from "@playwright/test";

export class CheckoutOverviewCancell {
  private page: Page;

  elements = {
    cancelButton: () => this.page.locator('[data-test="cancel"]'),
  };

  constructor(page: Page) {
    this.page = page;
  }

  async clickCancelButton() {
    await this.elements.cancelButton().click();
  }
}
