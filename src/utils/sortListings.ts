import { Listing } from "../types/types";

export function sortListings(listings: Listing[], filter: string | null) {
  const sortedListings = [...listings];
  switch (filter) {
    case "Sort by newest":
      return sortedListings.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    case "Sort by oldest":
      return sortedListings.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    default:
      return sortedListings;
  }
}
