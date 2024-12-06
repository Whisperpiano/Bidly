import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/user";
import { SuccessResponse, ErrorResponse } from "../../types/types";

export type ProfileArgs = {
  limit: number;
  page: number;
  sort: "credits" | "name";
  sortOrder: string;
};

export default async function getProfiles({
  limit,
  page,
  sort,
  sortOrder,
}: ProfileArgs): Promise<SuccessResponse | ErrorResponse | undefined> {
  const accessToken = useAuthStore.getState().accessToken;
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.profiles}?limit=${limit}&page=${page}&sort=${sort}&sortOrder=${sortOrder}`,
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
