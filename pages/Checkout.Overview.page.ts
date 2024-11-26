import { type Page } from "@playwright/test";

export class CancelPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        ButtonFinish: () => this.page.locator("#finish"),
    };

    async clickFinish() {
        await this.elements.ButtonFinish().click();
    }

  
}
