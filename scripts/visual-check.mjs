import { chromium } from "@playwright/test";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
const browser = await chromium.launch({ channel: "chrome" });
const routes = [
  "/",
  "/rolunk",
  "/szolgaltatasok",
  "/akciok",
  "/ugyelet",
  "/kapcsolat",
];
await mkdir("test-results/visual", { recursive: true });
for (const [name, width, height] of [
  ["desktop", 1440, 1000],
  ["mobile", 390, 844],
]) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const composites = [];
  for (let i = 0; i < routes.length; i++) {
    await page.goto("http://localhost:3106" + routes[i]);
    await page.locator("h1").waitFor();
    const screenshot = await page.screenshot();
    const tile = await sharp(screenshot)
      .resize(name === "desktop" ? 720 : 390)
      .png()
      .toBuffer();
    composites.push({
      input: tile,
      left: (i % 3) * (name === "desktop" ? 720 : 390),
      top: Math.floor(i / 3) * (name === "desktop" ? 500 : 844),
    });
    if (i === 0)
      await page.screenshot({
        path: "test-results/visual/" + name + "-home.png",
      });
  }
  await sharp({
    create: {
      width: (name === "desktop" ? 720 : 390) * 3,
      height: (name === "desktop" ? 500 : 844) * 2,
      channels: 3,
      background: "#f8f7f2",
    },
  })
    .composite(composites)
    .png()
    .toFile("test-results/visual/" + name + "-overview.png");
  await page.close();
}
const narrow = await browser.newPage({ viewport: { width: 320, height: 740 } });
for (const route of routes) {
  await narrow.goto("http://localhost:3106" + route);
  const overflow = await narrow.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  if (overflow) {
    await browser.close();
    throw new Error("320px overflow: " + route);
  }
}
console.log("Visual previews generated; all six routes fit at 320px.");
await browser.close();
