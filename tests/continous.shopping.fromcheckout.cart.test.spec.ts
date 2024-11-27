import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AddToCartPage } from "../pages/addTocartPage";
import { CartPage } from "../pages/chekoutCartPage";


test.describe("Test continous shopping from cart",{tag: ['tc-03','@fast']}, () => {
    let loginPage: LoginPage;
    let cart: AddToCartPage;
    let chekout: CartPage;
    
     

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        cart = new AddToCartPage(page)
        chekout = new CartPage(page)
       
        await loginPage.navigate();
    });
    test("Test continous shopping from cart", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce");
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await cart.clickAddToCart();
        await cart.clickCartButton();
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
        await chekout.clickContinueShopping();
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        
    });
    
})