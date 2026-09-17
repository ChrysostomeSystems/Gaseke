import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");

describe("GS Gaseke hero", () => {
  it("contains the typed motivational phrase rotation", () => {
    expect(homePage).toContain('const heroMessages = ["Shaping tomorrow.", "Growing potential.", "Inspiring futures."]');
    expect(homePage).toContain("aria-live=\"polite\"");
  });

  it("uses the three supplied school photos in the hero carousel and excludes the logo", () => {
    expect(homePage).toContain("const heroPhotos = [");
    expect(homePage).toContain("assets.campus");
    expect(homePage).toContain("assets.classroom");
    expect(homePage).toContain("assets.students");
    expect(homePage).not.toContain("assets.logo, label");
  });
});
