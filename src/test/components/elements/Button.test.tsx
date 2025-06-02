import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/elements/Button";

describe("Button Component", () => {
  it("renders with primary style", () => {
    render(<Button type="primary">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("bg-primary-600");
  });

  it("renders with secondary style", () => {
    render(<Button type="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("bg-neutral-100");
  });

  it("renders with tertiary style", () => {
    render(<Button type="tertiary">Tertiary</Button>);
    const button = screen.getByText("Tertiary");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("bg-neutral-50");
  });

  it("renders with outlined style", () => {
    render(<Button type="outlined">Outlined</Button>);
    const button = screen.getByText("Outlined");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("border");
  });

  it("renders with filter style", () => {
    render(<Button type="filter">Filter</Button>);
    const button = screen.getByText("Filter");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("dark:bg-neutral-900");
  });

  it("calls handleClick when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Button type="primary" handleClick={handleClick}>
        Clickable
      </Button>
    );
    const button = screen.getByText("Clickable");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with aria-label attribute", () => {
    render(
      <Button type="primary" ariaLabel="Test button">
        Accessible
      </Button>
    );
    const button = screen.getByLabelText("Test button");
    expect(button).toBeInTheDocument();
  });
});
