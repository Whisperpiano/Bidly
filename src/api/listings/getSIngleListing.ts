import { NOROFF_API } from "../../lib/constants";
import {
  ErrorResponseListing,
  SuccessResponseListing,
} from "../../types/types";

export default async function getSingleListing({
  id,
}: {
  id: string;
}): Promise<SuccessResponseListing | ErrorResponseListing | undefined> {
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.listings}/${id}?_seller=true&_bids=true`,
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
