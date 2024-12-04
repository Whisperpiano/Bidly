import { useState, useEffect } from "react";
import { Meta, UserProfile } from "../../types/types";
import searchProfiles from "../../api/profiles/searchProfiles";

export type SortOption = {
  sort: "credits";
  sortOrder: "asc" | "desc";
};

interface FetchProfilesParams {
  query: string | undefined;
  page: number;
  selectedFilter: string | null;
}

interface FetchProfilesReturn {
  profiles: UserProfile[];
  meta: Meta | null;
  isLoading: boolean;
  error: string | null;
}

export function useFetchProfiles({
  query,
  page,
  selectedFilter,
}: FetchProfilesParams): FetchProfilesReturn {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sortProfilesOptions = (selectedFilter: string): SortOption => {
    switch (selectedFilter) {
      case "More credits":
        return { sort: "credits", sortOrder: "desc" };
      case "Less credits":
        return { sort: "credits", sortOrder: "asc" };
      default:
        return { sort: "credits", sortOrder: "desc" };
    }
  };

  useEffect(() => {
    async function fetchProfiles() {
      if (!query || !selectedFilter) return;
      setIsLoading(true);
      try {
        const queryToSearch = query === "all" ? "a" : query;

        const { sort, sortOrder } = sortProfilesOptions(selectedFilter);
        const response = await searchProfiles({
          query: queryToSearch,
          limit: 20,
          page,
          sort,
          sortOrder,
        });

        if (!response) return;

        if ("data" in response) {
          setProfiles(
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
        setProfiles([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfiles();
  }, [query, selectedFilter, page]);

  return { profiles, meta, isLoading, error };
}
