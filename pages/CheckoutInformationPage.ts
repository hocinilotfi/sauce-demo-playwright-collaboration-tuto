import { type Page } from "@playwright/test";

export class CheckoutInformationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        FirstName: ()=> this.page.locator("#first-name"),
        LastName: ()=> this.page.locator("#last-name"),
        PostaleCode: ()=> this.page.locator("#postal-code"),
        boutonContenue: ()=> this.page.locator("#continue"),
       
    };


    async saisirFirstName() {
        await this.elements.FirstName();
    }
    
    async saisirLastName() {
        await this.elements.LastName();
    }
    async saisirCodePostale() {
        await this.elements.PostaleCode();
    }
    async cliquesBoutonContenue() {
        await this.elements.boutonContenue().click();
    }
    
}