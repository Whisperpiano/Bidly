import { useEffect, useState } from "react";
import { UserProfile } from "../../types/types";
import { useParams } from "react-router-dom";
import getSingleProfile from "../../api/profiles/getSingleProfile";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchProfile() {
      try {
        if (!username) {
          return;
        }
        const profile = await getSingleProfile({ username });

        if (!profile) {
          setIsError(true);
          setErrorMessage("Invalid profile");
          return;
        }

        if ("data" in profile) {
          setIsError(false);
          setErrorMessage("");
          setProfile(profile.data);
        } else if ("errors" in profile) {
          setIsError(true);
          setErrorMessage(profile?.errors?.[0]?.message || "Unknown error");
          setProfile(null);
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(` Something went wrong fetching the profile: ${error}`);
        setProfile(null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, [username]);
  return {
    profile,
    isLoading,
    isError,
    errorMessage,
  };
}
