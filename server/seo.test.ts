import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const indexHtml = readFileSync(new URL("../client/index.html", import.meta.url), "utf8");
const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");
const robots = readFileSync(new URL("../client/public/robots.txt", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../client/public/sitemap.xml", import.meta.url), "utf8");

describe("GS Gaseke SEO foundation", () => {
  it("includes metadata, canonical, Open Graph and School schema", () => {
    expect(indexHtml).toContain("<title>GS Gaseke");
    expect(indexHtml).toContain('rel="canonical"');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('name="twitter:card"');
    expect(indexHtml).toContain('"@type": "School"');
    expect(indexHtml).toContain('"telephone": "+250788509463"');
  });

  it("publishes a sitemap and protects the secure portal from crawling", () => {
    expect(existsSync(new URL("../client/public/robots.txt", import.meta.url))).toBe(true);
    expect(existsSync(new URL("../client/public/sitemap.xml", import.meta.url))).toBe(true);
    expect(robots).toContain("Allow: /");
    expect(robots).toContain("Disallow: /portal");
    expect(robots).toContain("Sitemap:");
    expect(sitemap).toContain("<urlset");
    expect(sitemap).toContain("https://gasekeschool-2wxuuzbx.manus.space/");
  });

  it("uses descriptive alt text and loading hints for key images", () => {
    expect(homePage).toContain("at GS Gaseke school");
    expect(homePage).toContain('fetchPriority="high"');
    expect(homePage).toContain('loading="lazy"');
    expect(homePage).toContain('decoding="async"');
  });
});
