import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CartPage } from "../pages/chekoutCartPage";
import { CheckoutInformationPage } from "../pages/Checkout.Information.Page";

test.describe("chekout cart", () => {
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

    test("chekout page cart", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce");
        await cart.clickAddToCart()
        await cart.clickCartButton();
        await chekout.cliqueCheckoutButton();
        await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    });
    test("Remplire le formulaire", async ({ page }) => {
        await checkoutInformationPage.saisirFirstName("sarah");
        await checkoutInformationPage.saisirLastName("klmp");
        await checkoutInformationPage.saisirCodePostale("92000");
        await checkoutInformationPage.cliquesBoutonContenue();
        await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    });
})