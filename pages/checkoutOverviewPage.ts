import { Page, Locator } from "@playwright/test";

export class CheckoutOverviewPage{
  private page: Page;

  elements = {
    finishButton: () => this.page.locator('#finish'),
  };

  constructor(page: Page) {
    this.page = page;
  }

  async clickFinish() {
    await this.elements.finishButton().click();
  }
}
