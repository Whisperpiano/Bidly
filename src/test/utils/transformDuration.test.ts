import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import transformDuration from "../../utils/transformDuration";

describe("transformDuration", () => {
  // Fixed date for tests
  const mockDate = new Date("2023-05-15T12:00:00Z");

  beforeEach(() => {
    // Mock of Date for consistent results
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should add 7 days for duration 1", () => {
    const result = transformDuration(1);
    const expectedDate = new Date("2023-05-22T12:00:00Z"); // 7 days after
    expect(new Date(result).getTime()).toBe(expectedDate.getTime());
  });

  it("should add 14 days for duration 2", () => {
    const result = transformDuration(2);
    const expectedDate = new Date("2023-05-29T12:00:00Z"); // 14 days after
    expect(new Date(result).getTime()).toBe(expectedDate.getTime());
  });

  it("should add 1 month for duration 3", () => {
    const result = transformDuration(3);
    const expectedDate = new Date("2023-06-15T12:00:00Z"); // 1 month after
    expect(new Date(result).getTime()).toBe(expectedDate.getTime());
  });

  it("should add 3 months for duration 4", () => {
    const result = transformDuration(4);
    const expectedDate = new Date("2023-08-15T12:00:00Z"); // 3 months after
    expect(new Date(result).getTime()).toBe(expectedDate.getTime());
  });

  it("should default to 7 days for invalid duration", () => {
    const result = transformDuration(999); // Invalid value
    const expectedDate = new Date("2023-05-22T12:00:00Z"); // 7 days by default
    expect(new Date(result).getTime()).toBe(expectedDate.getTime());
  });

  it("should return an ISO string", () => {
    const result = transformDuration(1);
    expect(typeof result).toBe("string");
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/);
  });
});
