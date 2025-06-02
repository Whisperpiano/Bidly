import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "../../../components/elements/Badge";

describe("Badge Component", () => {
  it("renders with the provided text", () => {
    render(<Badge text="New" />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("has correct styling classes", () => {
    render(<Badge text="Featured" />);
    const badge = screen.getByText("Featured");

    // Verify styling classes
    expect(badge.className).toContain("dark:bg-neutral-800");
    expect(badge.className).toContain("bg-neutral-200/50");
    expect(badge.className).toContain("text-sm");
    expect(badge.className).toContain("rounded-lg");
  });

  it("handles long text with truncation", () => {
    const longText = "This is a very long text that should be truncated";
    render(<Badge text={longText} />);

    const badge = screen.getByText(longText);
    expect(badge.className).toContain("truncate");
  });

  it("should be accessible", () => {
    render(<Badge text="Accessible" />);
    const badge = screen.getByText("Accessible");

    // Verify accessibility
    expect(badge).toBeVisible();
  });
});
