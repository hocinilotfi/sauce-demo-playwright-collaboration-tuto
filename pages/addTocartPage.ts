import { type Page } from "@playwright/test";

export class AddToCartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        addToCartButton: () => this.page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]'),
        cartItem: () => this.page.locator('div[data-test="inventory-item"]'),
        cartButton: () => this.page.locator('a[data-test="shopping-cart-link"]'),
    };

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/cart.html");
    }

    async clickAddToCart() {
        await this.elements.addToCartButton().click();
    }

    async clickCartButton() {
        await this.elements.cartButton().click();
    }
}
