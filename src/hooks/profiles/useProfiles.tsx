import { useEffect, useState } from "react";
import getProfiles, { ProfileArgs } from "../../api/profiles/getProfiles";
import { UserProfile } from "../../types/types";

export function useProfiles({ limit, page, sort, sortOrder }: ProfileArgs) {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function fetchProfiles() {
      try {
        setIsLoading(true);
        const profiles = await getProfiles({
          limit,
          page,
          sort,
          sortOrder,
        });

        if (!profiles) {
          return;
        }

        if ("data" in profiles) {
          setIsError(false);
          setErrorMessage("");
          setProfiles(
            Array.isArray(profiles.data) ? profiles.data : [profiles.data]
          );
        }
        if ("errors" in profiles) {
          setIsError(true);
          setErrorMessage(profiles.errors[0].message);
          setProfiles([]);
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(`Something went wrong fetching the profiles: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfiles();
  }, [limit, page, sort, sortOrder]);

  return {
    profiles,
    isLoading,
    isError,
    errorMessage,
  };
}
