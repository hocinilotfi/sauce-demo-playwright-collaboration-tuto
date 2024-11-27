import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("Login Tests",{tag : ['tc-14','@regression','@smoke','@critical']}, () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test("correct username && correct password", async ({page}) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  });

  test("correct username && incorrect password", async () => {
    await loginPage.login("standard_user", "wrong_password");
    const errorMessage = await loginPage.elements.errorMessage().innerText();
    expect(errorMessage).toContain(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("incorrect username && correct password", async () => {
    await loginPage.login("invalid_user", "secret_sauce");
    const errorMessage = await loginPage.elements.errorMessage().innerText();
    expect(errorMessage).toContain(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
