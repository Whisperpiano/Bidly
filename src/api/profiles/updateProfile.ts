import { NOROFF_API } from "../../lib/constants";
import { useAuthStore } from "../../store/userStore";
import {
  ProfileUpdateErrorResponse,
  ProfileUpdateSuccessResponse,
} from "../../types/types";

export default async function updateProfile({
  avatar,
  banner,
}: {
  avatar?: string;
  banner?: string;
}): Promise<
  ProfileUpdateSuccessResponse | ProfileUpdateErrorResponse | undefined
> {
  const username = useAuthStore.getState().username;
  const accessToken = useAuthStore.getState().accessToken;

  const body: Record<string, unknown> = {};

  if (avatar) {
    body.avatar = {
      url: avatar,
      alt: `Avatar of ${username}`,
    };
  }

  if (banner) {
    body.banner = {
      url: banner,
      alt: `Banner of ${username}`,
    };
  }

  try {
    const response = await fetch(
      `${NOROFF_API.auctions.profiles}/${username}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "X-Noroff-API-Key": import.meta.env.VITE_NOROFF_API_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return errorData as ProfileUpdateErrorResponse;
    }
    const data = await response.json();
    return data as ProfileUpdateSuccessResponse;
  } catch (error) {
    console.error("Failed to update profile:", error);
  }
}
