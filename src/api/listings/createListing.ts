import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/user";
import { Media, Meta, ErrorResponse } from "../../types/types";

interface BodyArgs {
  title: string;
  description: string;
  tags: string[];
  endsAt: string;
  media: Media[];
}

interface Listing {
  id: string;
  title: string;
  description: string;
  media: Media[];
  tags: string[];
  created: string;
  updated: string;
  endsAt: string;
  _count: {
    bids: number;
  };
}

export interface SuccessCreateListingResponse {
  data: Listing;
  meta: Meta;
}

export default async function createListing(body: BodyArgs) {
  const accessToken = useAuthStore.getState().accessToken;

  try {
    const response = await fetch(`${NOROFF_API.auctions.listings}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": import.meta.env.VITE_NOROFF_API_KEY,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return errorData as ErrorResponse;
    }
    const data = await response.json();
    return data as SuccessCreateListingResponse;
  } catch (error) {
    console.error("Failed to create listing:", error);
  }
}
