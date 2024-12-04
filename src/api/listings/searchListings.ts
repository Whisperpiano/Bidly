import { NOROFF_API } from "../../lib/constants";
import {
  ErrorResponseListing,
  SuccessResponseListing,
} from "../../types/types";

type SearchListingArgs = {
  query: string;
  limit: number;
  page: number;
  sort: "created" | "endsAt" | "title";
  sortOrder: "asc" | "desc";
};

export default async function searchListings({
  query,
  limit,
  page,
  sort,
  sortOrder,
}: SearchListingArgs): Promise<
  SuccessResponseListing | ErrorResponseListing | undefined
> {
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.listings}/search?q=${query}&_bids=true&_seller=true&sort=${sort}&sortOrder=${sortOrder}&limit=${limit}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      return errorData as ErrorResponseListing;
    }
    const data = await response.json();
    return data as SuccessResponseListing;
  } catch (error) {
    console.error(error);
  }
}
