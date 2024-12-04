import { useState, useEffect } from "react";
import searchListings from "../../api/listings/searchListings";
import { Listing, Meta } from "../../types/types";

export type SortOption = {
  sort: "created" | "endsAt" | "title";
  sortOrder: "asc" | "desc";
};

interface FetchListingsParams {
  query: string | undefined;
  page: number;
  selectedFilter: string | null;
}

interface FetchListingsReturn {
  listings: Listing[];
  meta: Meta | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetchListings({
  query,
  page,
  selectedFilter,
}: FetchListingsParams): FetchListingsReturn {
  const [listings, setListings] = useState<Listing[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sortListingOptions = (selectedFilter: string): SortOption => {
    switch (selectedFilter) {
      case "Sort by newest":
        return { sort: "created", sortOrder: "desc" };
      case "Sort by oldest":
        return { sort: "created", sortOrder: "asc" };
      case "Sort by title A-Z":
        return { sort: "title", sortOrder: "asc" };
      case "Sort by title Z-A":
        return { sort: "title", sortOrder: "desc" };
      default:
        return { sort: "created", sortOrder: "desc" };
    }
  };

  useEffect(() => {
    async function fetchListings() {
      if (!query || !selectedFilter) return;
      setIsLoading(true);
      try {
        const queryToSearch = query === "all" ? "a" : query;

        const { sort, sortOrder } = sortListingOptions(selectedFilter);
        const response = await searchListings({
          query: queryToSearch,
          limit: 20,
          page,
          sort,
          sortOrder,
        });

        if (!response) return;

        if ("data" in response) {
          setListings(
            Array.isArray(response.data) ? response.data : [response.data]
          );
        }
        if ("errors" in response) {
          setError(response.errors[0].message);
        }
        if ("meta" in response) {
          setMeta(response.meta);
        }
      } catch (error) {
        setError(`Something went wrong searching for listings: ${error}`);
        setListings([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchListings();
  }, [query, selectedFilter, page]);

  return { listings, meta, isLoading, error };
}
