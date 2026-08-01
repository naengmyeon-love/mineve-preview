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
    ["/salt", "MINEVE SALT"],
    ["/renew", "MINEVE RENEW"],
    ["/rest", "MINEVE REST"],
    ["/our-story", "From origin to ritual"],
    ["/notes", "MINEVE Editorial"],
    ["/shop", "MINEVE Shop"],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), new RegExp(expected, "i"), pathname);
  }
});

test("keeps product numbers and claim-status data centralized", async () => {
  const data = await readFile(new URL("../app/data/site.ts", import.meta.url), "utf8");
  const productCard = await readFile(new URL("../app/components/ProductCard.tsx", import.meta.url), "utf8");
  const linePage = await readFile(new URL("../app/components/LinePage.tsx", import.meta.url), "utf8");

  assert.match(data, /mineve-salt-original/);
  assert.match(data, /night-magnesium-balance/);
  assert.match(data, /EvidenceStatus/);
  assert.match(data, /"draft" \| "verified" \| "hidden"/);
  assert.match(data, /publishedMineralEvidence/);
  assert.doesNotMatch(data, /검증 대기/);
  assert.match(productCard, /formatPrice/);
  assert.match(linePage, /products\.filter/);
});
