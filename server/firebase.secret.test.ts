import { describe, expect, it } from "vitest";

describe("Firebase Web SDK configuration", () => {
  it("is accepted by Firebase Authentication", async () => {
    const apiKey = process.env.VITE_FIREBASE_API_KEY;
    const projectId = process.env.VITE_FIREBASE_PROJECT_ID;
    expect(apiKey, "VITE_FIREBASE_API_KEY must be configured").toBeTruthy();
    expect(projectId, "VITE_FIREBASE_PROJECT_ID must be configured").toBeTruthy();

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "firebase-config-probe@example.invalid",
          password: "NotARealPassword123!",
          returnSecureToken: true,
        }),
      },
    );
    const body = (await response.json()) as { error?: { message?: string } };
    const errorMessage = body.error?.message ?? "";

    expect(errorMessage, `Firebase rejected the Web API key for ${projectId}`).not.toBe("API_KEY_INVALID");
  }, 15_000);
});
