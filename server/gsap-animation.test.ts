import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");

describe("GSAP ScrollTrigger integration", () => {
  it("registers ScrollTrigger and initializes GSAP in a React lifecycle", () => {
    expect(homePage).toContain('import gsap from "gsap"');
    expect(homePage).toContain('import { ScrollTrigger } from "gsap/ScrollTrigger"');
    expect(homePage).toContain("gsap.registerPlugin(ScrollTrigger)");
    expect(homePage).toContain("useLayoutEffect");
    expect(homePage).toContain("context.revert()");
  });

  it("has staggered hero, heading and card reveal targets", () => {
    expect(homePage).toContain("gsap-hero-item");
    expect(homePage).toContain("gsap-section-heading");
    expect(homePage).toContain("gsap-card-group");
    expect(homePage).toContain("stagger: 0.09");
    expect(homePage).toContain('start: "top 82%"');
  });
});
