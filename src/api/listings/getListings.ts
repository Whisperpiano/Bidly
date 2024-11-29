import { NOROFF_API } from "../../lib/constants";
import {
  ErrorResponseListing,
  SuccessResponseListing,
} from "../../types/types";

type ListingArgs = {
  limit: number;
  page: number;
  sort: "created" | "endsAt" | "title";
  sortOrder: "asc" | "desc";
};

export default async function getListings({
  limit,
  page,
  sort,
  sortOrder,
}: ListingArgs): Promise<
  SuccessResponseListing | ErrorResponseListing | undefined
> {
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.listings}?_active=true&limit=${limit}&page=${page}&sort=${sort}&sortOrder=${sortOrder}&_bids=true&_seller=true`,
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
