import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");
const globalStyles = readFileSync(new URL("../client/src/index.css", import.meta.url), "utf8");

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

  it("uses a designed parallax background and compact story spacing", () => {
    expect(homePage).toContain("scroll-story-background_810824ed.jpg");
    expect(homePage).toContain("backgroundY");
    expect(homePage).toContain("backgroundScale");
    expect(homePage).toContain("items.length * 36");
  });

  it("uses a 3D notebook for Academics and designed panels where photos are not needed", () => {
    expect(homePage).toContain("function AcademicNotebook");
    expect(homePage).toContain('visual="notebook"');
    expect(homePage).toContain('visual="facilities"');
    expect(homePage).toContain('visual="activities"');
    expect(homePage).toContain('motionLevel="quiet"');
  });

  it("keeps the brand system consistent and calms Facilities and Activities", () => {
    expect(globalStyles).toContain("Manrope");
    expect(globalStyles).toContain("Sora");
    expect(globalStyles).toContain("--gs-forest");
    expect(globalStyles).toContain("--gs-gold");
    expect(homePage).toContain('motionLevel="calm"');
    expect(homePage).toContain('motionLevel === "quiet"');
    expect(homePage).toContain("contentDuration");
  });
});
