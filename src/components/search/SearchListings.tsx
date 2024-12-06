import Filter from "../filter/Filter";
import { FILTER_LISTINGS_OPTIONS } from "../../lib/constants";
import SortButton from "../elements/SortButton";
import GridLayoutSwitcher from "../elements/GridLayoutSwitcher";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GridItemCard from "../grid/GridItemCard";
import GridItemSkeleton from "../skeletons/GridItemSkeleton";
import Pagination from "../elements/Pagination";
import { useFetchListings } from "../../hooks/listings/useSearchListings";

export default function SearchListings() {
  const { query } = useParams();

  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<string | null>("");
  const [skeletonsToShow, setSkeletonsToShow] = useState(15);
  const { listings, meta, isLoading } = useFetchListings({
    query,
    page,
    selectedFilter,
  });

  useEffect(() => {
    setPage(1);
  }, [query, selectedFilter]);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setSkeletonsToShow(15);
      } else if (width >= 1024) {
        setSkeletonsToShow(12);
      } else if (width >= 768) {
        setSkeletonsToShow(9);
      } else {
        setSkeletonsToShow(4);
      }
    };
    updateNumberOfItems();
    window.addEventListener("resize", updateNumberOfItems);
    return () => {
      window.removeEventListener("resize", updateNumberOfItems);
    };
  }, []);

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
      {listings.length === 0 && !isLoading && (
        <div className="relative animate-fastreveal">
          <p className="absolute z-10 w-full h-full max-h-screen text-center flex flex-col items-center justify-center -translate-y-10 text-xl font-semibold dark:text-neutral-50 text-neutral-900">
            No listings found
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-2">
              We couldn't find any listings matching your search criteria.
            </span>
          </p>
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b dark:after:from-neutral-950/85 dark:after:to-neutral-950  after:from-neutral-50/85 after:to-neutral-50 after:z-10 animate-pulse">
            {Array.from({ length: skeletonsToShow }, (_, index) => (
              <GridItemSkeleton key={index} />
            ))}
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2">
        {isLoading &&
          Array.from({ length: 20 }, (_, index) => (
            <GridItemSkeleton key={index} />
          ))}
        {listings.length > 0 &&
          !isLoading &&
          listings.map((item) => <GridItemCard key={item.id} item={item} />)}
      </div>

      {meta && meta.totalCount >= 20 && (
        <Pagination meta={meta} setPage={setPage} />
      )}
    </section>
  );
}
