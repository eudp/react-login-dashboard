import { test, expect } from "@playwright/test";
import { validatePassword } from "../src/app/utils/login";
const DEV_URL = "http://localhost:5173";

test.describe("Login Page", () => {
  test("should display login form", async ({ page }) => {
    await page.goto(DEV_URL);
    await expect(
      page.getByRole("heading", { name: "Sign in to your account" })
    ).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button")).toBeVisible();
  });

  test("should log in with valid credentials", async ({ page }) => {
    await page.goto(DEV_URL);
    await page.getByLabel("Email").fill("prologin@prologin.com");
    await page.getByLabel("Password").fill("ProLogin123456");
    await page.getByRole("button").click();
    await expect(page).toHaveURL(DEV_URL + "/dashboard");
  });

  test("should stay in login page with invalid email", async ({ page }) => {
    await page.goto(DEV_URL);
    const invalidEmail = "invalidemail";
    await page.getByLabel("Email").fill(invalidEmail);
    await page.getByLabel("Password").fill("ProLogin123456");
    await page.getByRole("button").click();

    await expect(page).toHaveURL(DEV_URL);
  });

  test("should display error message with invalid password", async ({
    page,
  }) => {
    await page.goto(DEV_URL);

    await page.getByLabel("Email").fill("prologin@prologin.com");
    const invalidPassword = "short";
    await page.getByLabel("Password").fill(invalidPassword);
    await page.getByRole("button").click();

    const expectedError = validatePassword(invalidPassword)
      ? ""
      : "Invalid password";

    await expect(page.getByText(expectedError)).toBeVisible();

    await expect(page).toHaveURL(DEV_URL);
  });

  test("should display error message for incorrect credentials", async ({
    page,
  }) => {
    await page.goto(DEV_URL);
    await page.getByLabel("Email").fill("wrong@example.com");
    await page.getByLabel("Password").fill("wrongpassword123");
    await page.getByRole("button").click();
    await expect(
      page.getByText("Login failed. Please check your credentials.")
    ).toBeVisible();
    await expect(page).toHaveURL(DEV_URL);
  });

  test("should redirect to dashboard after login with persistent authentication", async ({
    page,
    context,
  }) => {
    await page.goto(DEV_URL);
    await page.getByLabel("Email").fill("prologin@prologin.com");
    await page.getByLabel("Password").fill("ProLogin123456");
    await page.getByRole("button").click();
    await expect(page).toHaveURL(DEV_URL + "/dashboard");

    await page.close();

    const newPage = await context.newPage();
    await newPage.goto(DEV_URL);

    await expect(newPage).toHaveURL(DEV_URL + "/dashboard");
  });
});
