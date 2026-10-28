import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  const errors = [];
  page.on("console", (e) => {
    if (e.type() === "error") errors.push(e.text());
  });
  page.on("pageerror", (e) => errors.push(e.message));
  const routes = [
    "/",
    "/about",
    "/collections",
    "/collections/wildflower",
    "/collections/nocturne",
    "/collections/townhouse",
    "/customization",
    "/e-invitations",
    "/qr-gallery",
    "/combinations",
    "/gallery",
    "/contact",
  ];
  for (const route of routes) {
    const response = await page.goto("http://localhost:3000" + route);
    assert.equal(response.status(), 200, route);
    await page.locator("main h1").waitFor();
    await page.waitForFunction(
      () => document.documentElement.dataset.hydrated === "true",
    );
    assert.equal(await page.locator("main h1").count(), 1, route);
    await page.waitForTimeout(100);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      route + " desktop overflow",
    );
    for (const img of await page.locator("main img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((img) => img.decode());
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    console.log("PASS route and image loading " + route);
  }
  const collectionBackgrounds = [];
  const collectionImages = [];
  for (const [slug, name] of [
    ["wildflower", "Wildflower"],
    ["nocturne", "Nocturne"],
    ["townhouse", "The Townhouse"],
  ]) {
    await page.goto(`http://localhost:3000/collections/${slug}`);
    await page.getByRole("heading", { name, exact: false, level: 1 }).waitFor();
    collectionBackgrounds.push(
      await page
        .locator(".collection-world")
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    );
    collectionImages.push(
      await page.locator(".page-hero img").getAttribute("src"),
    );
    const link = await page
      .getByRole("link", { name: "ENQUIRE ABOUT THIS COLLECTION" })
      .getAttribute("href");
    assert.ok(decodeURIComponent(link).includes(name));
  }
  assert.equal(new Set(collectionBackgrounds).size, 3);
  assert.equal(new Set(collectionImages).size, 3);
  for (const [oldSlug, newSlug] of [
    ["essentielle", "wildflower"],
    ["signature", "nocturne"],
    ["prestige", "townhouse"],
  ]) {
    const response = await page.request.get(
      `http://localhost:3000/collections/${oldSlug}`,
      { maxRedirects: 0 },
    );
    assert.equal(response.status(), 308);
    assert.equal(response.headers().location, `/collections/${newSlug}`);
  }
  console.log(
    "PASS distinct collection identities, enquiry context, and legacy redirects",
  );
  await page.goto("http://localhost:3000/contact");
  await page.getByRole("button", { name: "DISCUSS MY VISION" }).click();
  assert.equal(
    await page.getByRole("link", { name: "CONTINUE TO WHATSAPP" }).count(),
    0,
  );
  assert.equal(
    await page
      .getByLabel("FULL NAME")
      .evaluate((input) => input.validity.valueMissing),
    true,
  );
  await page.getByLabel("CONTACT NUMBER").fill("abc");
  assert.equal(
    await page
      .getByLabel("CONTACT NUMBER")
      .evaluate((input) => input.validity.patternMismatch),
    true,
  );
  console.log("PASS required form fields and telephone validation");
  await page.goto("http://localhost:3000/customization");
  await page
    .getByRole("button", { name: "Premium floral arrangements" })
    .click();
  await page.getByLabel("FULL NAME").fill("Demo & Guest");
  await page.getByLabel("CONTACT NUMBER").fill("+60 123456789");
  await page.getByLabel("EMAIL ADDRESS").fill("demo@example.com");
  await page
    .getByLabel("CUSTOMIZATION REQUIREMENTS")
    .fill("Ivory roses & candlelight");
  await page.getByRole("button", { name: "DISCUSS MY VISION" }).click();
  const wa = await page
    .getByRole("link", { name: "CONTINUE TO WHATSAPP" })
    .getAttribute("href");
  assert.ok(wa.startsWith("https://wa.me/60000000000?text="));
  assert.ok(decodeURIComponent(wa).includes("Ivory roses & candlelight"));
  assert.ok(decodeURIComponent(wa).includes("Premium floral arrangements"));
  console.log("PASS encoded bespoke enquiry");
  await page.goto("http://localhost:3000/e-invitations");
  await page.getByRole("tab", { name: "The Editorial" }).click();
  await page
    .getByRole("tabpanel")
    .getByRole("heading", { name: "Isabelle & James" })
    .waitFor();
  console.log("PASS invitation style switch");
  await page.goto("http://localhost:3000/qr-gallery");
  await page.getByRole("button", { name: "SIMULATE A SCAN" }).click();
  await page.getByText("Demo gallery revealed below.").waitFor();
  assert.equal(await page.locator(".demo-gallery .masonry button").count(), 6);
  await page.getByRole("button", { name: "RESET DEMONSTRATION" }).click();
  assert.equal(await page.locator(".demo-gallery").count(), 0);
  console.log("PASS QR simulation and reset");
  await page.goto("http://localhost:3000/gallery");
  await page
    .getByRole("button", { name: "Floral Details", exact: true })
    .click();
  assert.equal(await page.locator(".masonry>button").count(), 1);
  await page.locator(".masonry>button").first().click();
  await page.getByRole("dialog", { name: "Image viewer" }).waitFor();
  await page.keyboard.press("Escape");
  await page
    .getByRole("dialog", { name: "Image viewer" })
    .waitFor({ state: "detached" });
  console.log("PASS gallery filtering and keyboard lightbox");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("dialog", { name: "Navigation" }).waitFor();
  assert.equal(await page.locator("#full-menu nav a").count(), 9);
  await page.keyboard.press("Escape");
  await page
    .getByRole("dialog", { name: "Navigation" })
    .waitFor({ state: "detached" });
  console.log("PASS menu and escape");
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await page.goto("http://localhost:3000" + route);
    await page.locator("main h1").waitFor();
    await page.waitForFunction(
      () => document.documentElement.dataset.hydrated === "true",
    );
    await page.waitForTimeout(100);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      route + " mobile overflow",
    );
  }
  console.log("PASS 12 mobile route layouts");
  await page.goto("http://localhost:3000");
  await page.waitForFunction(
    () => document.documentElement.dataset.hydrated === "true",
  );
  await page.evaluate(() => document.fonts.ready);
  for (const img of await page.locator("main img").all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate((img) => img.decode());
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(700);
  await page.screenshot({ path: "/tmp/elara-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((img) => img.decode()));
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "/tmp/elara-desktop.png", fullPage: true });
  await page.goto("http://localhost:3000/collections");
  for (const img of await page.locator("main img").all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate((img) => img.decode());
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: "/tmp/elara-collections-desktop.png",
    fullPage: true,
  });
  await page.goto("http://localhost:3000/collections/nocturne");
  for (const img of await page.locator("main img").all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate((img) => img.decode());
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({
    path: "/tmp/elara-nocturne-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: "/tmp/elara-nocturne-mobile.png",
    fullPage: true,
  });
  const animated = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "no-preference",
  });
  animated.on("pageerror", (e) => errors.push(e.message));
  await animated.goto("http://localhost:3000");
  await animated.getByRole("button", { name: "SKIP INTRO" }).waitFor();
  await animated.getByRole("button", { name: "SKIP INTRO" }).click();
  await animated.locator(".intro").waitFor({ state: "detached" });
  await animated.evaluate(async () => {
    await document.fonts.ready;
    await document.querySelector(".hero img").decode();
  });
  await animated.screenshot({ path: "/tmp/elara-hero.png" });
  await animated.reload();
  await animated.waitForTimeout(300);
  assert.equal(await animated.locator(".intro").count(), 0);
  console.log("PASS cinematic intro skip and session persistence");
  await animated.close();
  assert.deepEqual(errors, []);
  console.log("PASS no browser exceptions");
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
