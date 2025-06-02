import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import GridItemCard from "../../../components/grid/GridItemCard";

// Mock for navigate
const mockNavigate = vi.fn();

// Mock for handleLoginOpen
const mockHandleLoginOpen = vi.fn();

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

// Mock for AuthGuard
vi.mock("../../../utils/AuthGuard", () => ({
  AuthGuard: () => false, // By default, user is not logged in
}));

// Mock for modalStore
vi.mock("../../../store/modalStore", () => ({
  useModalStore: () => ({
    handleLoginOpen: mockHandleLoginOpen,
  }),
}));

// Item for testing
const mockItem = {
  id: "123",
  title: "Test Item",
  description: "Test description",
  media: [{ url: "https://example.com/test.jpg", alt: "Test image" }],
  tags: ["test"],
  created: "2023-01-01T00:00:00Z",
  updated: "2023-01-01T00:00:00Z",
  endsAt: "2024-01-01T00:00:00Z",
  _count: { bids: 1 },
  seller: {
    name: "testuser",
    email: "test@example.com",
    bio: null,
    avatar: { url: "https://example.com/avatar.jpg", alt: "Avatar" },
    banner: { url: "https://example.com/banner.jpg", alt: "Banner" },
  },
  bids: [
    {
      id: "bid1",
      amount: 100,
      created: "2023-01-01T00:00:00Z",
      bidder: {
        name: "bidder1",
        email: "bidder1@example.com",
        bio: null,
        avatar: { url: "https://example.com/bidder.jpg", alt: "Bidder avatar" },
        banner: {
          url: "https://example.com/bidder-banner.jpg",
          alt: "Bidder banner",
        },
      },
    },
  ],
};

describe("GridItemCard Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly", () => {
    render(<GridItemCard item={mockItem} />);

    // Only verify that the item title is displayed correctly
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });
});
