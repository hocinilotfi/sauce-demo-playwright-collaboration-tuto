import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CartPage } from "../pages/chekoutCartPage";

test.describe("chekout cart", () => {
    let loginPage: LoginPage;
    let cart: AddToCartPage;
    let chekout : CartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cart = new AddToCartPage(page)
        chekout = new CartPage(page)
        await loginPage.navigate();
    });

    test("chekout to cart", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce");
        await cart.clickAddToCart()
        await cart.navigate();
        await chekout.cliqueCheckoutButton();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

      
    });
});
