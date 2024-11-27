import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CartPage } from "../pages/chekoutCartPage";

test.describe("chekout cart", {tag: ['@tc-10','@smoke', '@regression', '@critical']}, () => {
    let loginPage: LoginPage;
    let cart: AddToCartPage;
    let chekout: CartPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cart = new AddToCartPage(page)
        chekout = new CartPage(page)
        await loginPage.navigate();
    });

    test("chekout page cart", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce");
        await cart.clickAddToCart()
        await cart.clickCartButton();
        await chekout.cliqueCheckoutButton();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    });
    test("Cancel Checkout and Continue Shopping", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce");
        await cart.clickAddToCart();
        await cart.clickCartButton();
        await chekout.clickContinueShopping();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    });
});