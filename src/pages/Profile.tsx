import { useProfile } from "../hooks/profiles/useProfile";
import FilterAndSort from "../components/profile/FilterAndSort";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileNavigationHeader from "../components/profile/ProfileNavigationHeader";
import ProfileItemCard from "../components/grid/ProfileItemCard";
import Spinner from "../components/elements/Spinner";

export default function Profile() {
  const { profile, isLoading, selectedFilter, setSelectedFilter, listings } =
    useProfile();

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center -translate-y-[100px]">
          <Spinner />
        </div>
      ) : (
        <section className=" mt-6 animate-reveal">
          <ProfileBanner profile={profile} />
          <div className="px-2 md:px-4 lg:px-6 -mt-8 sm:-mt-12  md:-mt-16 lg:-mt-20 ">
            <ProfileNavigationHeader />
            <FilterAndSort
              filter={selectedFilter}
              setFilter={setSelectedFilter}
            />
            {listings.length === 0 ? (
              <div className="w-full border dark:border-neutral-800 border-neutral-200 rounded-lg my-6 min-h-[650px] flex items-center justify-center">
                <span className="text-base md:text-lg dark:text-neutral-400 text-neutral-500">
                  No listings created yet.
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2 min-h-[650px]">
                {listings.map((listing) => (
                  <ProfileItemCard key={listing.id} item={listing} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
