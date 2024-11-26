import { test, expect } from "@playwright/test";
import { RemoveToCard } from "../pages/removeToCardPage";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CheckoutOverviewCancell } from "../pages/checkoutOverviewCancelPage";

test.describe("Automatise le bouton Cancel sur la page de checkout", () => {
  let loginPage: LoginPage;
  let addToCartPage: AddToCartPage;
  let removeToCard: RemoveToCard;
  let checkoutOverviewCancell: CheckoutOverviewCancell;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    addToCartPage = new AddToCartPage(page);
    removeToCard = new RemoveToCard(page);
    checkoutOverviewCancell = new CheckoutOverviewCancell(page);
    await loginPage.navigate();
  });

  test("Automatise le bouton Cancel sur la page de checkout", async ({
    page,
  }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await addToCartPage.clickAddToCart();

    await page.goto("https://www.saucedemo.com/checkout-step-one.html");

    await checkoutOverviewCancell.clickCancelButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  });
});
