import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "/",
  "/rolunk",
  "/szolgaltatasok",
  "/akciok",
  "/ugyelet",
  "/kapcsolat",
];
for (const route of routes) {
  test(
    route + " — tartalom, mobil elrendezés, akadálymentesség",
    async ({ page }, testInfo) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute("lang", "hu");
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
      await expect(page.locator(".demo-banner")).toContainText(
        "Nem a gyógyszertár hivatalos oldala",
      );
      expect(await page.title()).toContain("Aranymérleg");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
      expect(errors).toEqual([]);
      if (testInfo.project.name === "mobile") {
        await page.setViewportSize({ width: 320, height: 740 });
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
        ).toBe(true);
        await page.setViewportSize({ width: 390, height: 844 });
      }
      await page.screenshot({
        path:
          "test-results/" +
          testInfo.project.name +
          (route === "/" ? "/home" : route) +
          ".png",
        fullPage: true,
      });
    },
  );
}
test("Az ajánlatszűrés működik és a demójelölés megmarad", async ({ page }) => {
  await page.goto("/akciok");
  await expect(page.locator(".offer-card")).toHaveCount(3);
  for (const name of ["Vitaminok", "Bőrápolás", "Gyógyteák"]) {
    await page.getByRole("button", { name, exact: true }).click();
    await expect(page.locator(".offer-card")).toHaveCount(1);
    await expect(
      page.getByRole("button", { name, exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".demo-label")).toHaveText("DEMÓAJÁNLAT");
    await expect(page.locator(".offer-disclaimer")).toContainText(
      "Nem valós ajánlat",
    );
  }
  await page.getByRole("button", { name: "Összes", exact: true }).click();
  await expect(page.locator(".offer-card")).toHaveCount(3);
});
test("A navigáció, a fókusz és a külső célok működnek", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    const menu = page.getByRole("button", { name: "Menü megnyitása" });
    await menu.click();
    await page
      .getByRole("navigation", { name: "Mobil navigáció" })
      .getByRole("link", { name: "Rólunk", exact: true })
      .focus();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await menu.click();
    await page
      .getByRole("navigation", { name: "Mobil navigáció" })
      .getByRole("link", { name: "Kapcsolat", exact: true })
      .click();
    await expect(page).toHaveURL(/kapcsolat/);
    await expect(
      page.getByRole("button", { name: "Menü megnyitása" }),
    ).toHaveAttribute("aria-expanded", "false");
  } else {
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Ugrás a tartalomhoz" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
    await page
      .getByRole("navigation", { name: "Fő navigáció", exact: true })
      .getByRole("link", { name: "Kapcsolat", exact: true })
      .click();
  }
  await expect(page.locator('a[href="tel:+3677421654"]').first()).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Útvonaltervezés", exact: true }),
  ).toHaveAttribute("href", /google.com\/maps\/dir/);
  await expect(page.locator(".hours-note")).toContainText("19:00");
  await page.goto("/ugyelet");
  await expect(
    page.getByRole("link", { name: "Hivatalos ügyeletkereső" }),
  ).toHaveAttribute("href", "https://ogyei.gov.hu/gyogyszertarkereso");
  await expect(page.locator(".status-label")).toContainText(
    "Nincs ellenőrzött",
  );
});
test("Ismeretlen útvonal valódi 404 választ ad", async ({ page }) => {
  const response = await page.goto("/nem-letezo-oldal");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("link", { name: "Vissza a főoldalra", exact: true }),
  ).toBeVisible();
});
