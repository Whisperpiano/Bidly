import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { sortListings } from "../../utils/sortListings";
import { Listing } from "../../types/types";

// Mock data for testing
const createMockListing = (
  id: string,
  title: string,
  created: string,
  endsAt: string
): Partial<Listing> => ({
  id,
  title,
  created,
  endsAt,
  media: [{ url: "", alt: "" }],
  tags: [],
  updated: created,
  _count: { bids: 0 },
  seller: {
    name: "testuser",
    email: "test@example.com",
    bio: null,
    avatar: { url: "", alt: "" },
    banner: { url: "", alt: "" },
  },
  bids: [],
});

describe("sortListings", () => {
  // Mocked date to ensure consistent test results
  const mockCurrentDate = new Date("2023-05-15T12:00:00Z");
  let mockListings: Partial<Listing>[];

  beforeEach(() => {
    // Mock Date.now to return our fixed date
    vi.useFakeTimers();
    vi.setSystemTime(mockCurrentDate);

    // Setup test data
    mockListings = [
      createMockListing(
        "1",
        "Oldest listing",
        "2023-01-01T12:00:00Z",
        "2023-06-01T12:00:00Z"
      ), // Active
      createMockListing(
        "2",
        "Middle listing",
        "2023-03-01T12:00:00Z",
        "2023-04-01T12:00:00Z"
      ), // Finished
      createMockListing(
        "3",
        "Newest listing",
        "2023-05-01T12:00:00Z",
        "2023-07-01T12:00:00Z"
      ), // Active
    ];
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return the original list when no filter is applied", () => {
    const result = sortListings(mockListings as Listing[], null);
    expect(result).toEqual(mockListings);
  });

  it("should sort listings by newest first", () => {
    const result = sortListings(mockListings as Listing[], "Sort by newest");
    expect(result[0].id).toBe("3"); // Newest listing
    expect(result[1].id).toBe("2"); // Middle listing
    expect(result[2].id).toBe("1"); // Oldest listing
  });

  it("should sort listings by oldest first", () => {
    const result = sortListings(mockListings as Listing[], "Sort by oldest");
    expect(result[0].id).toBe("1"); // Oldest listing
    expect(result[1].id).toBe("2"); // Middle listing
    expect(result[2].id).toBe("3"); // Newest listing
  });

  it("should filter to show only finished listings", () => {
    const result = sortListings(mockListings as Listing[], "Only finished");
    expect(result.length).toBe(1);
    expect(result[0].id).toBe("2"); // The only finished listing
  });

  it("should filter to show only active listings", () => {
    const result = sortListings(mockListings as Listing[], "Only active");
    expect(result.length).toBe(2);
    expect(result.map((item) => item.id)).toContain("1");
    expect(result.map((item) => item.id)).toContain("3");
    expect(result.map((item) => item.id)).not.toContain("2");
  });

  it("should handle empty listings array", () => {
    const result = sortListings([] as Listing[], "Sort by newest");
    expect(result).toEqual([]);
  });
});
