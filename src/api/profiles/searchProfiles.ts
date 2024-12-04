import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/user";
import { ErrorResponse, SuccessResponse } from "../../types/types";

type SearchUsersArgs = {
  query: string;
  limit: number;
  page: number;
  sort: "credits";
  sortOrder: "asc" | "desc";
};

export default async function searchProfiles({
  query,
  limit,
  page,
  sort,
  sortOrder,
}: SearchUsersArgs): Promise<SuccessResponse | ErrorResponse | undefined> {
  const accessToken = useAuthStore.getState().accessToken;
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.profiles}/search?q=${query}&_listings=true&_wins=true&sort=${sort}&sortOrder=${sortOrder}&limit=${limit}&page=${page}`,
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
