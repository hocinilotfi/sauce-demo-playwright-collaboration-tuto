import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CheckoutInformationPage } from "../pages/Checkout.Information.Page"; 
test.describe("Checkout Information Tests", () => {
  let loginPage: LoginPage;
  let checkoutPage: CheckoutInformationPage; 

  test.beforeEach(async ({ page }) => {
  
    loginPage = new LoginPage(page);
    checkoutPage = new CheckoutInformationPage(page); 
    
    // Naviguer vers la page de login
    await loginPage.navigate();
    await page.goto('https://www.saucedemo.com');
  });

  test('Devrait remplir le formulaire et soumettre', async ({ page }) => {
    
    await loginPage.login("standard_user", "secret_sauce");

    
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await checkoutPage.saisirFirstName('sarah');
    await checkoutPage.saisirLastName('le sage');
    await checkoutPage.saisirCodePostale('12345');

    await expect(await checkoutPage.elements.FirstName().inputValue()).toBe('sarah');
    await expect(await checkoutPage.elements.LastName().inputValue()).toBe('le sage');
    await expect(await checkoutPage.elements.PostaleCode().inputValue()).toBe('12345');

    await checkoutPage.cliquesBoutonContenue();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  });


});