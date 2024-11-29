import { useEffect, useState } from "react";
import { Listing } from "../../types/types";
import getListings from "../../api/listings/getListings";

interface ListingsArgs {
  limit: number;
  page: number;
  sort: "created" | "endsAt" | "title";
  sortOrder: "asc" | "desc";
}

export function useListings({ limit, page, sort, sortOrder }: ListingsArgs) {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function fetchListings() {
      setIsLoading(true);
      try {
        const items = await getListings({
          limit,
          page,
          sort,
          sortOrder,
        });

        if (!items) {
          return;
        }

        if ("data" in items) {
          setIsError(false);
          setErrorMessage("");
          setListings(Array.isArray(items.data) ? items.data : [items.data]);
        } else if ("errors" in items) {
          setIsError(true);
          setErrorMessage(items.errors[0].message);
          setListings([]);
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          `Something went wrong while fetching the listings ${error} `
        );
        setListings([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchListings();
  }, [limit, page, sort, sortOrder]);

  return {
    listings,
    isLoading,
    isError,
    errorMessage,
  };
}
