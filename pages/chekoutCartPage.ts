import { type Locator, type Page } from '@playwright/test';

export class CartchekoutPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('button[data-test="checkout"]');
  }

  
  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}
