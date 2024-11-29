import { ErrorResponse } from "react-router-dom";
import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/user";
import { SuccessResponse } from "../../types/types";

export default async function getSingleProfile(username: string) {
  const accessToken = useAuthStore.getState().accessToken;
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.profiles}/${username}?_listings=true&_wins=true`,
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
      return errorData as ErrorResponse;
    }

    const data = await response.json();
    return data as SuccessResponse;
  } catch (error) {
    console.error(error);
  }
}
