import { describe, expect, it } from "vitest";

describe("Firebase Firestore connection", () => {
  it("reaches the configured default database", async () => {
    const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
    expect(projectId, "VITE_FIREBASE_PROJECT_ID must be configured").toBeTruthy();

    const response = await fetch(
      `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/__connection_test__/connection`,
    );
    const body = (await response.json()) as { error?: { message?: string } };
    const errorMessage = body.error?.message ?? "";

    // A missing test document, or protected rules, still proves the database
    // endpoint exists. Only a missing default database is a connection failure.
    expect(errorMessage).not.toMatch(/database .*not found/i);
    expect(response.status).toBeLessThan(500);
  }, 15_000);
});
