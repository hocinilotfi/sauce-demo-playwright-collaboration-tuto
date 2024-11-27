import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CartPage } from "../pages/chekoutCartPage";
import { CheckoutInformationPage } from "../pages/Checkout.Information.Page";

test.describe("chekout cart", {tag: ['@tc-15','@smoke', '@regression', '@critical']}, () => {
    let loginPage: LoginPage;
    let cart: AddToCartPage;
    let chekout: CartPage;
    let checkoutInformationPage: CheckoutInformationPage;
     

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cart = new AddToCartPage(page)
        chekout = new CartPage(page)
        checkoutInformationPage = new CheckoutInformationPage (page)
        await loginPage.navigate();
    });
    test("Remplir le formulaire", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce");
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await cart.clickAddToCart();
        await cart.clickCartButton();
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
        await chekout.cliqueCheckoutButton();
        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
        await checkoutInformationPage.saisirFirstName("sarah");
        await checkoutInformationPage.saisirLastName("klmp");
        await checkoutInformationPage.saisirCodePostale("92000");
        await checkoutInformationPage.cliquesBoutonContenue();
        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    });
    
})