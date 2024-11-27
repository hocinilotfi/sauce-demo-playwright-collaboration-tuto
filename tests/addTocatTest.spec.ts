import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";

test.describe("add to cart",  () => {
  let loginPage: LoginPage;
  let cart: AddToCartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cart = new AddToCartPage(page);
    await loginPage.navigate();
  });

  test("add to cart", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await cart.clickAddToCart();
    await cart.clickCartButton();
    const item = cart.elements.cartItem();
    await expect(item).toBeVisible();
  });
});
