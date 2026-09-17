import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");

describe("GS Gaseke public navigation", () => {
  it("does not expose the school portal", () => {
    expect(homePage).not.toContain("School portal");
    expect(homePage).not.toContain("Open school portal");
    expect(homePage).not.toContain('href="/portal"');
  });
});
