import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const filePath = pathname === "/" ? "../out/index.html" : `../out${pathname}/index.html`;
  const html = await readFile(new URL(filePath, import.meta.url), "utf8");
  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

test("renders the MINEVE home page without starter markers", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /MINEVE/);
  assert.match(html, /Minerals through Jeju/);
  assert.match(html, /제주의 미네랄을/);
  assert.match(html, /SALT/);
  assert.match(html, /RENEW/);
  assert.match(html, /REST/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("renders all primary static overview routes", async () => {
  const routes = [
    ["/collections", "Collections"],
    ["/collections/salt", "MINEVE[\\s\\S]*SALT"],
    ["/collections/renew", "MINEVE[\\s\\S]*RENEW"],
    ["/collections/rest", "MINEVE[\\s\\S]*REST"],
    ["/our-story", "제주와 시간에서"],
    ["/notes", "MINEVE Editorial"],
    ["/shop", "MINEVE Shop"],
    ["/products/jeju-mineral-salt-original", "제주 미네랄 솔트 오리지널"],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected, "i"), pathname);
  }
});

test("keeps products, notes, and story chapters in centralized content data", async () => {
  const data = await readFile(new URL("../app/data/content.ts", import.meta.url), "utf8");
  const brandUI = await readFile(new URL("../app/components/BrandUI.tsx", import.meta.url), "utf8");

  assert.match(data, /jeju-mineral-salt-original/);
  assert.match(data, /night-magnesium-balance/);
  assert.match(data, /storyChapters/);
  assert.match(data, /passageSteps/);
  assert.doesNotMatch(data, /Lorem ipsum|placeholder/i);
  assert.match(brandUI, /formatPrice/);
  assert.match(brandUI, /products\.filter/);
});
