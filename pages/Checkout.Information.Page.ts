import { type Page } from "@playwright/test";

export class CheckoutInformationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  elements = {
    FirstName: () => this.page.locator("#first-name"),
    LastName: () => this.page.locator("#last-name"),
    PostaleCode: () => this.page.locator("#postal-code"),
    boutonContenue: () => this.page.locator("#continue"),
  };

  async saisirFirstName(firstName: string) {
    await this.elements.FirstName().fill(firstName);
  }

  async saisirLastName(lastName: string) {
    await this.elements.LastName().fill(lastName);
  }
  async saisirCodePostale(postalCode: string) {
    await this.elements.PostaleCode().fill(postalCode);
  }
  async cliquesBoutonContenue() {
    await this.elements.boutonContenue().click();
  }
}
