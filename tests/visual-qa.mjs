import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = process.env.QA_BASE_URL ?? "http://localhost:3000";
const outputRoot =
  process.env.QA_OUTPUT_ROOT ??
  fileURLToPath(new URL("../.qa/", import.meta.url));
const routes = [
  "/",
  "/salt",
  "/renew",
  "/rest",
  "/our-story",
  "/notes",
  "/notes/water-beneath-the-island",
  "/shop",
  "/products/mineve-salt-original",
];

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
await mkdir(outputRoot, { recursive: true });

const result = {
  routes: [],
  consoleErrors: [],
  pageErrors: [],
  layout: [],
  links: [],
  header: null,
  mobileMenu: null,
  mobileProduct: null,
};

const desktopContext = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
const desktop = await desktopContext.newPage();
desktop.on("console", (message) => {
  if (message.type() === "error") result.consoleErrors.push(message.text());
});
desktop.on("pageerror", (error) => result.pageErrors.push(error.message));

for (const pathname of routes) {
  const response = await desktop.goto(`${baseUrl}${pathname}`, {
    waitUntil: "networkidle",
  });
  const metrics = await desktop.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.trim(),
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  result.routes.push({
    path: pathname,
    status: response?.status(),
    title: metrics.title,
    h1: metrics.h1,
  });
  result.layout.push({
    path: pathname,
    overflow: metrics.scrollWidth > metrics.clientWidth,
    scrollWidth: metrics.scrollWidth,
    clientWidth: metrics.clientWidth,
  });
}

await desktop.goto(baseUrl, { waitUntil: "networkidle" });
await desktop.screenshot({
  path: `${outputRoot}\\mineve-home-desktop.png`,
  fullPage: true,
});
await desktop.evaluate(() => scrollTo(0, 500));
await desktop.waitForTimeout(300);
result.header = await desktop.locator(".site-header").evaluate((element) => ({
  position: getComputedStyle(element).position,
  background: getComputedStyle(element).backgroundColor,
  className: element.className,
}));

const internalLinks = await desktop.locator('a[href^="/"]').evaluateAll((elements) =>
  [...new Set(elements.map((element) => element.getAttribute("href")))].filter(Boolean),
);
for (const href of internalLinks) {
  const response = await desktop.request.get(`${baseUrl}${href}`);
  result.links.push({ href, status: response.status() });
}

const mobileContext = await browser.newContext({
  viewport: { width: 390, height: 844 },
  reducedMotion: "reduce",
});
const mobile = await mobileContext.newPage();
mobile.on("console", (message) => {
  if (message.type() === "error") result.consoleErrors.push(`mobile: ${message.text()}`);
});
mobile.on("pageerror", (error) => result.pageErrors.push(`mobile: ${error.message}`));
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
await mobile.getByRole("button", { name: "메뉴 열기" }).click();
result.mobileMenu = {
  open: (await mobile.locator(".mobile-nav--open").count()) === 1,
  focused: await mobile.evaluate(
    () => document.activeElement?.getAttribute("aria-label") ?? document.activeElement?.textContent,
  ),
};
await mobile.keyboard.press("Escape");
result.mobileMenu.closedAfterEscape =
  (await mobile.locator(".mobile-nav--open").count()) === 0;
await mobile.screenshot({
  path: `${outputRoot}\\mineve-home-mobile.png`,
  fullPage: true,
});

await mobile.goto(`${baseUrl}/products/mineve-salt-original`, {
  waitUntil: "networkidle",
});
result.mobileProduct = await mobile.evaluate(() => ({
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  bodyFont: getComputedStyle(document.body).fontSize,
  hasAccordion: Boolean(document.querySelector(".accordion")),
  hasPurchaseButton: [...document.querySelectorAll("button")].some(
    (button) => button.textContent?.trim() === "Add to cart",
  ),
}));
await mobile.screenshot({
  path: `${outputRoot}\\mineve-product-mobile.png`,
  fullPage: true,
});

await browser.close();
console.log(JSON.stringify(result, null, 2));
