import { type Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        checkoutButton: () => this.page.locator('button[data-test="checkout"]'),
    };

    async cliqueCheckoutButton() {
        await this.elements.checkoutButton().click();
    }
}
