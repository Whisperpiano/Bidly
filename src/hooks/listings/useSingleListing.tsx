import { useCallback, useEffect, useState } from "react";
import { Listing } from "../../types/types";
import getSingleListing from "../../api/listings/getSIngleListing";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useSingleListing() {
  const [listing, setListing] = useState<Listing | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const navigate = useNavigate();

  // Function to make refetch again
  const fetchSingleListing = useCallback(async () => {
    setIsLoading(true);
    try {
      const item = await getSingleListing({ id });

      if (!item || ("errors" in item && item.errors.length > 0)) {
        setIsError(true);
        setErrorMessage(item?.errors?.[0]?.message || "Unknown error");
        navigate("/not-found");
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
  }, [id, navigate]);

  useEffect(() => {
    fetchSingleListing();
  }, [fetchSingleListing]);

  return {
    listing,
    isLoading,
    isError,
    errorMessage,
    refetch: fetchSingleListing,
    id,
  };
}
