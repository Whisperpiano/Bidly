import { describe, it, expect } from "vitest";
import { formatNumber } from "../../utils/formatNumber";

describe("formatNumber", () => {
  it("should return the number as is when less than 1000", () => {
    expect(formatNumber(0)).toBe(0);
    expect(formatNumber(1)).toBe(1);
    expect(formatNumber(999)).toBe(999);
  });

  it("should format thousands with K suffix and one decimal place", () => {
    expect(formatNumber(1000)).toBe("1.0 K");
    expect(formatNumber(1500)).toBe("1.5 K");
    expect(formatNumber(9999)).toBe("10.0 K");
  });

  it("should format large numbers correctly", () => {
    expect(formatNumber(10000)).toBe("10.0 K");
    expect(formatNumber(999999)).toBe("1000.0 K");
  });
});
