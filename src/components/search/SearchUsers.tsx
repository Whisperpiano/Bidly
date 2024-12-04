import Filter from "../filter/Filter";
import { FILTER_USER_OPTIONS } from "../../lib/constants";
import UserCard from "./UserCard";
import SortButton from "../elements/SortButton";
import GridLayoutSwitcher from "../elements/GridLayoutSwitcher";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProfiles } from "../../hooks/profiles/useSearchProfiles";
import Pagination from "../elements/Pagination";

export default function SearchUsers() {
  const { query } = useParams();

  const [page, setPage] = useState<number>(1);
  const [selectedFilter, setSelectedFilter] = useState<string | null>("");
  // const [skeletonsToShow, setSkeletonsToShow] = useState<number>(0);
  const { profiles, meta } = useFetchProfiles({
    query,
    page,
    selectedFilter,
  });

  // Reset page to 1 when query or selectedFilter changes
  useEffect(() => {
    setPage(1);
  }, [query, selectedFilter]);

  console.log(page);

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
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 py-6 px-0 md:px-2">
        {profiles.map((profile) => (
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
