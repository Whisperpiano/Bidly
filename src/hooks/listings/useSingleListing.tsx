import { useCallback, useEffect, useState } from "react";
import { Listing } from "../../types/types";
import getSingleListing from "../../api/listings/getSIngleListing";

export function useSingleListing({ id }: { id: string }) {
  const [listing, setListing] = useState<Listing | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Función para realizar el fetch
  const fetchSingleListing = useCallback(async () => {
    if (!id) {
      setIsError(true);
      setErrorMessage("Invalid ID provided");
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");

    try {
      const item = await getSingleListing({ id });

      if (!item || ("errors" in item && item.errors.length > 0)) {
        setIsError(true);
        setErrorMessage(item?.errors?.[0]?.message || "Unknown error");
        setListing(undefined);
      } else if ("data" in item) {
        setListing(item.data);
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(
        `Something went wrong fetching the listing with id ${id}: ${
          (error as Error).message
        }`
      );
      setListing(undefined);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSingleListing();
  }, [fetchSingleListing]);

  return {
    listing,
    isLoading,
    isError,
    errorMessage,
    refetch: fetchSingleListing,
  };
}
