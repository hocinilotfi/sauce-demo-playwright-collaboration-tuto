import { type Page } from "@playwright/test";

export class CancelPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        cancelButton: () => this.page.locator('button[data-test="cancel"]'),
    };

    async clickCancel() {
        await this.elements.cancelButton().click();
    }

  
}
