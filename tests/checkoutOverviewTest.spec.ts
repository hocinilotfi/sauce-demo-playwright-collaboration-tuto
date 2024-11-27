import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CartPage } from "../pages/chekoutCartPage";
import { CheckoutInformationPage } from "../pages/Checkout.Information.Page";

test.describe("Checkout overview  Tests", {tag: ['tc-07','@smoke', '@regression', '@critical']}, () => {
  let loginPage: LoginPage;
  let cart: AddToCartPage;
  let chekout: CartPage;
  let checkoutInformationPage: CheckoutInformationPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cart = new AddToCartPage(page);
    chekout = new CartPage(page);
    checkoutInformationPage = new CheckoutInformationPage(page);
    await loginPage.navigate();
  });

  test("Checkout overview Tests", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await cart.clickAddToCart();
    await cart.clickCartButton();
    await chekout.cliqueCheckoutButton();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await checkoutInformationPage.saisirFirstName("Mariam");
    await checkoutInformationPage.saisirLastName("Kamdem");
    await checkoutInformationPage.saisirCodePostale("78800");
    await checkoutInformationPage.cliquesBoutonContenue();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  });
});
