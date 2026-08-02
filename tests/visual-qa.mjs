import { chromium } from "playwright-core";
import { mkdir, readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../out/", import.meta.url));
let previewServer;
const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4175";
if (!process.env.QA_BASE_URL) {
  previewServer = createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, baseUrl).pathname);
      const relativePath = pathname.endsWith("/")
        ? `${pathname}index.html`
        : extname(pathname)
          ? pathname
          : `${pathname}/index.html`;
      const safePath = normalize(relativePath).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
      const filePath = join(outputDirectory, safePath);
      const content = await readFile(filePath);
      const mime = {
        ".html": "text/html; charset=utf-8",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".woff2": "font/woff2",
      }[extname(filePath)] ?? "application/octet-stream";
      response.writeHead(200, { "content-type": mime });
      response.end(content);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });
  await new Promise((resolve) => previewServer.listen(4175, "127.0.0.1", resolve));
}
const outputRoot =
  process.env.QA_OUTPUT_ROOT ??
  fileURLToPath(new URL("../.qa/", import.meta.url));
const routes = [
  "/",
  "/collections",
  "/collections/salt",
  "/collections/renew",
  "/collections/rest",
  "/our-story",
  "/notes",
  "/notes/water-beneath-jeju",
  "/shop",
  "/products/jeju-mineral-salt-original",
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
    waitUntil: "domcontentloaded",
  });
  const metrics = await desktop.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.trim(),
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    overflowElements: [...document.querySelectorAll("*")]
      .filter((element) => element.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
      .slice(0, 8)
      .map((element) => ({ tag: element.tagName, className: element.className, right: Math.round(element.getBoundingClientRect().right) })),
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
    overflowElements: metrics.overflowElements,
  });
}

await desktop.goto(baseUrl, { waitUntil: "domcontentloaded" });
for (let y = 0; y < await desktop.evaluate(() => document.body.scrollHeight); y += 800) {
  await desktop.evaluate((nextY) => scrollTo(0, nextY), y);
  await desktop.waitForTimeout(70);
}
await desktop.evaluate(() => scrollTo(0, 0));
await desktop.waitForTimeout(500);
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
await mobile.goto(baseUrl, { waitUntil: "domcontentloaded" });
for (let y = 0; y < await mobile.evaluate(() => document.body.scrollHeight); y += 600) {
  await mobile.evaluate((nextY) => scrollTo(0, nextY), y);
  await mobile.waitForTimeout(70);
}
await mobile.evaluate(() => scrollTo(0, 0));
await mobile.waitForTimeout(500);
await mobile.getByRole("button", { name: "Menu" }).click();
result.mobileMenu = {
  open: (await mobile.locator(".mobile-menu--open").count()) === 1,
  focused: await mobile.evaluate(
    () => document.activeElement?.getAttribute("aria-label") ?? document.activeElement?.textContent,
  ),
};
await mobile.keyboard.press("Escape");
result.mobileMenu.closedAfterEscape =
  (await mobile.locator(".mobile-menu--open").count()) === 0;
await mobile.screenshot({
  path: `${outputRoot}\\mineve-home-mobile.png`,
  fullPage: true,
});

await mobile.goto(`${baseUrl}/products/jeju-mineral-salt-original`, {
  waitUntil: "domcontentloaded",
});
await mobile.waitForTimeout(1200);
result.mobileProduct = await mobile.evaluate(() => ({
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  bodyFont: getComputedStyle(document.body).fontSize,
  gallery: [...document.querySelectorAll(".product-gallery .media")].map((element) => {
    const box = element.getBoundingClientRect();
    return { width: Math.round(box.width), height: Math.round(box.height), top: Math.round(box.top) };
  }),
  thumbnails: [...document.querySelectorAll(".product-thumbnails .media")].map((element) => {
    const box = element.getBoundingClientRect();
    return { width: Math.round(box.width), height: Math.round(box.height), top: Math.round(box.top) };
  }),
  hasProductDetails: document.querySelectorAll(".product-details details").length >= 5,
  hasPurchaseButton: [...document.querySelectorAll("button")].some(
    (button) => button.textContent?.trim() === "장바구니 담기",
  ),
}));
await mobile.screenshot({
  path: `${outputRoot}\\mineve-product-mobile.png`,
  fullPage: true,
});

await browser.close();
if (previewServer) await new Promise((resolve) => previewServer.close(resolve));
console.log(JSON.stringify(result, null, 2));
