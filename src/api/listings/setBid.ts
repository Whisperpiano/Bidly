import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/user";
import { ErrorResponseBid, SuccessResponseBid } from "../../types/types";

export default async function setBid({
  id,
  amount,
}: {
  id: string;
  amount: number;
}): Promise<SuccessResponseBid | ErrorResponseBid | undefined> {
  const accessToken = useAuthStore.getState().accessToken;
  try {
    const response = await fetch(`${NOROFF_API.auctions.listings}/${id}/bids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "X-Noroff-API-Key": import.meta.env.VITE_NOROFF_API_KEY,
      },
      body: JSON.stringify({
        amount,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return errorData as ErrorResponseBid;
    }
    const data = await response.json();
    return data as SuccessResponseBid;
  } catch (error) {
    console.error(error);
  }
}
