import { test, expect } from "@playwright/test";
import { RemoveToCard } from "../pages/removeToCardPage";
import { LoginPage } from "../pages/loginPage";
import {AddToCartPage } from "../pages/addTocartPage";

test.describe("", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("Remove item from cart", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const addToCartPage = new AddToCartPage(page);
    await addToCartPage.clickAddToCart();
    const removeToCard = new RemoveToCard(page);
    await removeToCard.removeItem();
    expect(await removeToCard.isItemRemoved()).toBeTruthy();
  });
});
