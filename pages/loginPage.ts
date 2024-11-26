
import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    elements = {
        usernameInput : () => this.page.locator( '#user-name'),
        passwordInput : () => this.page.locator( '#password'),
        loginButton   : () => this.page.locator( '#login-button'),
        errorMessage  : () => this.page.locator( '[data-test="error"]'),

    }

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
       await this.elements.usernameInput().fill(username);
       await this.elements.passwordInput().fill(password);
       await this.elements.loginButton().click();
    }

    async getErrorMessage() {
        return await this.elements.errorMessage().innerText();
    }
    

}
