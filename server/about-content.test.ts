import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homePage = readFileSync(new URL("../client/src/pages/Home.tsx", import.meta.url), "utf8");

describe("GS Gaseke interactive About section", () => {
  it("contains the three detail entry points and back navigation", () => {
    expect(homePage).toContain('label: "Education levels"');
    expect(homePage).toContain('label: "School journey"');
    expect(homePage).toContain('label: "School fees"');
    expect(homePage).toContain("Back to About");
  });

  it("contains the confirmed education levels and termly fees", () => {
    expect(homePage).toContain('"Nursery", "Primary", "O-Level", "A-Level"');
    expect(homePage).toContain('fee: "20,000"');
    expect(homePage).toContain('fee: "50,000"');
    expect(homePage).toContain('fee: "85,000"');
  });

  it("does not present draft mission and vision text as official statements", () => {
    expect(homePage).toContain("Mission draft");
    expect(homePage).toContain("Vision draft");
  });
});
