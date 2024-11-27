import { test, expect } from "@playwright/test";
import { RemoveToCard } from "../pages/removeToCardPage";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";

test.describe("remove to card",{tag : ['tc-04','@fast']}, () => {
  let loginPage: LoginPage;
  let addToCartPage: AddToCartPage;
  let removeToCard: RemoveToCard;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    addToCartPage = new AddToCartPage(page);
    removeToCard = new RemoveToCard(page);
    await loginPage.navigate();
  });

  test("Remove item from cart", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await addToCartPage.clickAddToCart();
    await removeToCard.removeItem();
    expect(await removeToCard.isItemRemoved()).toBeTruthy();
  });
});
