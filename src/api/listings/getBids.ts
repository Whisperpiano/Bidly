import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/userStore";
import { SuccessBidsResponse, ErrorBidsResponse } from "../../types/types";

export default async function getBids({
  username,
}: {
  username: string;
}): Promise<SuccessBidsResponse | ErrorBidsResponse | undefined> {
  const accessToken = useAuthStore.getState().accessToken;

  try {
    const response = await fetch(
      `${NOROFF_API.auctions.profiles}/${username}/bids?_listings=true&_bids=true&limit=100&page=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "X-Noroff-API-Key": import.meta.env.VITE_NOROFF_API_KEY,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return errorData as ErrorBidsResponse;
    }

    const data = await response.json();
    return data as SuccessBidsResponse;
  } catch (error) {
    console.error(error);
  }
}
