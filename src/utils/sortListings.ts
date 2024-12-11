import { Listing } from "../types/types";

export function sortListings(listings: Listing[], filter: string | null) {
  const sortedListings = [...listings];
  const currentDate = new Date();

  switch (filter) {
    case "Sort by newest":
      return sortedListings.sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
    case "Sort by oldest":
      return sortedListings.sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
    case "Only finished":
      return sortedListings.filter(
        (listing) => new Date(listing.endsAt) <= currentDate
      );
    case "Only active":
      return sortedListings.filter(
        (listing) => new Date(listing.endsAt) > currentDate
      );
    default:
      return sortedListings;
  }
}
