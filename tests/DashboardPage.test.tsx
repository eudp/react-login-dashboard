import { test, expect } from "@playwright/test";
const DEV_URL = "http://localhost:5173";

test.describe("Dashboard Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(DEV_URL);
    await page.getByLabel("Email").fill("prologin@prologin.com");
    await page.getByLabel("Password").fill("ProLogin123456");
    await page.getByRole("button").click();
    await expect(page).toHaveURL(DEV_URL + "/dashboard");
  });

  test("should display comment list", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Comments:" })
    ).toBeVisible();
    await expect(page.getByRole("list")).toBeVisible();
  });

  test("should display loading state while fetching comments", async ({
    page,
  }) => {
    await page.route("**/comments", async (route) => {
      setTimeout(() => {
        route.continue();
      }, 3000);
    });

    await page.goto(DEV_URL + "/dashboard", { waitUntil: "domcontentloaded" });

    await expect(page.getByRole("status")).toBeVisible();
  });

  test("should open and close the modal", async ({ page }) => {
    await page.getByTestId("comment-item-button").first().click();

    await expect(page.getByTestId("modal-container")).toBeVisible();
    await expect(page.getByTestId("modal-title")).toBeVisible();
    await expect(page.getByTestId("comment-id")).toBeVisible();
    await expect(page.getByTestId("comment-email")).toBeVisible();
    await expect(page.getByTestId("comment-body")).toBeVisible();

    await page.getByTestId("close-modal-button").click();
    await expect(page.getByTestId("modal-container")).toBeHidden();
  });

  test("should handle API errors gracefully", async ({ page }) => {
    await page.route("**/comments", async (route) => route.abort());

    await page.goto(DEV_URL);

    await expect(page.getByRole("alert")).toBeVisible();
  });

  test("should logout successfully", async ({ page }) => {
    await page.getByRole("button", { name: "Logout" }).click();
    await expect(page).toHaveURL(DEV_URL);
  });
});
