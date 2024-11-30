import { useEffect, useState } from "react";
import { Listing } from "../../types/types";
import getSingleListing from "../../api/listings/getSIngleListing";

export function useSingleListing({ id }: { id: string }) {
  const [listing, setListing] = useState<Listing>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    async function fetchSingleListing() {
      setIsLoading(true);
      try {
        const item = await getSingleListing({ id });
        if (!item) {
          return;
        }
        if ("data" in item) {
          setIsError(false);
          setErrorMessage("");
          setListing(item.data);
        } else if ("errors" in item) {
          setIsError(true);
          setErrorMessage(item.errors[0]?.message || "Unknown error");
          setListing(undefined);
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          `Something went wrong fetching the listing with id ${id}: ${error}`
        );
        setListing(undefined);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSingleListing();
  }, [id]);

  return {
    listing,
    isLoading,
    isError,
    errorMessage,
  };
}
