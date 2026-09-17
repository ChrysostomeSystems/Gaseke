import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");

describe("GS Gaseke scrollytelling", () => {
  it("renders reusable pinned stories for academics, facilities, activities and gallery", () => {
    expect(homePage).toContain("function ScrollStory");
    expect(homePage).toContain('id="academics"');
    expect(homePage).toContain('id="facilities"');
    expect(homePage).toContain('id="activities"');
    expect(homePage).toContain('id="gallery"');
  });

  it("includes scroll progress and reduced-motion handling", () => {
    expect(homePage).toContain("useScroll");
    expect(homePage).toContain("useReducedMotion");
    expect(homePage).toContain("progressWidth");
    expect(homePage).toContain("Scroll to explore");
  });
});
