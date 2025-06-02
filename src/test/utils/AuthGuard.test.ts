import { describe, it, expect, vi, beforeEach } from "vitest";
import { AuthGuard } from "../../utils/AuthGuard";
import * as userStore from "../../store/userStore";

describe("AuthGuard", () => {
  // Authentication store mock
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return true when access token exists", () => {
    // Mock useAuthStore hook to simulate an authenticated user
    vi.spyOn(userStore, "useAuthStore").mockImplementation((selector) =>
      selector({
        username: "testuser",
        accessToken: "valid-token",
        profile: {
          name: "Test User",
          email: "test@example.com",
          bio: null,
          avatar: { url: "", alt: "" },
          banner: { url: "", alt: "" },
          credits: 1000,
          _count: {
            listings: 0,
            wins: 0,
          },
        },
        setAuth: vi.fn(),
        clearAuth: vi.fn(),
        updateCredits: vi.fn(),
      })
    );

    const result = AuthGuard();
    expect(result).toBe(true);
  });

  it("should return false when access token does not exist", () => {
    // Mock useAuthStore hook to simulate a non-authenticated user
    vi.spyOn(userStore, "useAuthStore").mockImplementation((selector) =>
      selector({
        username: null,
        accessToken: "",
        profile: null,
        setAuth: vi.fn(),
        clearAuth: vi.fn(),
        updateCredits: vi.fn(),
      })
    );

    const result = AuthGuard();
    expect(result).toBe(false);
  });

  it("should return false when access token is null", () => {
    // Mock useAuthStore hook to simulate a non-authenticated user (token null)
    vi.spyOn(userStore, "useAuthStore").mockImplementation((selector) =>
      selector({
        username: null,
        accessToken: null,
        profile: null,
        setAuth: vi.fn(),
        clearAuth: vi.fn(),
        updateCredits: vi.fn(),
      })
    );

    const result = AuthGuard();
    expect(result).toBe(false);
  });
});
