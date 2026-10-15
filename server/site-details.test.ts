import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");
const indexHtml = readFileSync(new URL("../client/index.html", import.meta.url), "utf8");

describe("GS Gaseke site details", () => {
  it("includes the generated favicon in document metadata", () => {
    expect(existsSync(new URL("../client/public/favicon.png", import.meta.url))).toBe(true);
    expect(existsSync(new URL("../client/public/favicon.ico", import.meta.url))).toBe(true);
    expect(indexHtml).toContain('rel="icon"');
    expect(indexHtml).toContain('href="/favicon.ico"');
    expect(indexHtml).toContain('href="/favicon.png"');
    expect(indexHtml).toContain('rel="apple-touch-icon"');
  });

  it("uses a real international phone action for the school", () => {
    expect(homePage).toContain('href="tel:+250788509463"');
    expect(homePage).toContain("Call the school");
    expect(homePage).toContain("aria-label=\"Call GS Gaseke at +250 788 509 463\"");
  });
});
