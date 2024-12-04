import Filter from "../filter/Filter";
import { FILTER_LISTINGS_OPTIONS } from "../../lib/constants";
import SortButton from "../elements/SortButton";
import GridLayoutSwitcher from "../elements/GridLayoutSwitcher";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchListings from "../../api/listings/searchListings";
import { Listing, Meta } from "../../types/types";
import GridItemCard from "../grid/GridItemCard";
import GridItemSkeleton from "../skeletons/GridItemSkeleton";
import Pagination from "../elements/Pagination";

// TODO: hacer custom hook
// devolver los listings si hay
// devolver meta si hay, para paginacion y cuantos items hay
// devovler errores
// devolver loading (para poner los skeletons)

export type SortOption = {
  sort: "created" | "endsAt" | "title";
  sortOrder: "asc" | "desc";
};

export default function SearchListings() {
  const { query } = useParams();

  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log(error);

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

        if (!response) {
          return;
        }

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

  useEffect(() => {
    setPage(1);
  }, [query, selectedFilter]);

  return (
    <section>
      <div className="border-t dark:border-neutral-800 border-neutral-200 px-0 md:px-2 flex justify-between items-center">
        <div className="mt-6 flex gap-2">
          <Filter
            options={FILTER_LISTINGS_OPTIONS}
            selected={selectedFilter}
            setSelected={setSelectedFilter}
          />
          <SortButton />
        </div>
        <GridLayoutSwitcher />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2">
        {isLoading
          ? Array.from({ length: 20 }, (_, index) => (
              <GridItemSkeleton key={index} />
            ))
          : listings.map((item) => <GridItemCard key={item.id} item={item} />)}
      </div>
      {meta && meta.totalCount >= 20 && (
        <Pagination meta={meta} setPage={setPage} />
      )}
    </section>
  );
}
