import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FILTER_USER_OPTIONS } from "../../lib/constants";
import { useFetchProfiles } from "../../hooks/profiles/useSearchProfiles";
import Filter from "../filter/Filter";
import UserCard from "./UserCard";
import SortButton from "../elements/SortButton";
import GridLayoutSwitcher from "../elements/GridLayoutSwitcher";
import Pagination from "../elements/Pagination";
import GridProfileSkeleton from "../skeletons/GridProfileSkeleton";
import useResponsiveUsersSkeletons from "../../hooks/responsive/useResponsiveUsersSkeletons";

export default function SearchUsers() {
  const { query } = useParams();

  const [page, setPage] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string | null>("");

  // Get the profiles based on the search query and selected filter
  const { profiles, meta, isLoading } = useFetchProfiles({
    query,
    page,
    selectedFilter,
  });

  // Get the number of skeletons to show based on the screen width
  const skeletonsToShow = useResponsiveUsersSkeletons();

  // Reset page to 1 when query or selectedFilter changes
  useEffect(() => {
    setPage(1);
  }, [query, selectedFilter]);

  return (
    <section>
      <div className="border-t dark:border-neutral-800 border-neutral-200 px-0 md:px-2 flex justify-between items-center">
        <div className="mt-6 flex gap-2">
          <Filter
            options={FILTER_USER_OPTIONS}
            selected={selectedFilter}
            setSelected={setSelectedFilter}
          />
          <SortButton />
        </div>
        <GridLayoutSwitcher />
      </div>
      {profiles.length === 0 && !isLoading && (
        <div className="relative animate-fastreveal">
          <p className="absolute z-10 w-full h-full max-h-screen text-center flex flex-col items-center justify-center -translate-y-10 text-xl font-semibold dark:text-neutral-50 text-neutral-900">
            No profiles found
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-2">
              We couldn't find any profile matching your search criteria.
            </span>
          </p>
          <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b dark:after:from-neutral-950/85 dark:after:to-neutral-950  after:from-neutral-50/85 after:to-neutral-50 after:z-10 animate-pulse">
            {Array.from({ length: skeletonsToShow }, (_, index) => (
              <GridProfileSkeleton key={index} />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 py-6 px-0 md:px-2">
        {isLoading &&
          Array.from({ length: 20 }, (_, index) => (
            <GridProfileSkeleton key={index} />
          ))}
        {profiles.length > 0 &&
          !isLoading &&
          profiles.map((profile) => (
            <UserCard
              key={`${profile.name}-${profile.credits}`}
              profile={profile}
            />
          ))}
      </div>
      {meta && meta.totalCount >= 20 && (
        <Pagination meta={meta} setPage={setPage} />
      )}
    </section>
  );
}
