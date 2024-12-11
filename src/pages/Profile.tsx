import { useProfile } from "../hooks/profiles/useProfile";
import FilterAndSort from "../components/profile/FilterAndSort";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileNavigationHeader from "../components/profile/ProfileNavigationHeader";
import ProfileItemCard from "../components/grid/ProfileItemCard";
import Spinner from "../components/elements/Spinner";
import GridItemSkeleton from "../components/skeletons/GridItemSkeleton";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/user";
import { scrollToTop } from "../utils/ScrollTop";

export type ProfileButton = "items" | "wins";

export default function Profile() {
  const { profile, isLoading, selectedFilter, setSelectedFilter, listings } =
    useProfile();
  const [skeletonsToShow, setSkeletonsToShow] = useState(10);
  const [selectedButton, setSelectedButton] = useState<ProfileButton>("items");
  const username = useAuthStore((state) => state.username);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setSkeletonsToShow(10);
      } else if (width >= 1024) {
        setSkeletonsToShow(8);
      } else if (width >= 768) {
        setSkeletonsToShow(6);
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

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center -translate-y-[100px]">
          <Spinner />
        </div>
      ) : (
        <section className="mt-6 animate-reveal">
          <ProfileBanner profile={profile} />
          <div className="px-2 md:px-4 lg:px-6 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
            <ProfileNavigationHeader
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              winsNumber={profile.wins?.length || 0}
              itemsNumber={listings.length}
            />
            {selectedButton === "items" && (
              <FilterAndSort
                filter={selectedFilter}
                setFilter={setSelectedFilter}
              />
            )}

            {selectedButton === "items" && listings.length === 0 ? (
              <div className="relative animate-fastreveal">
                <p className="absolute z-10 w-full h-full max-h-screen text-center flex flex-col items-center justify-center -translate-y-10 text-xl font-semibold dark:text-neutral-50 text-neutral-900">
                  {username === profile.name
                    ? "No listings created yet."
                    : "User has no listings yet."}
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-2">
                    {username === profile.name
                      ? "Create your first listing to get started!"
                      : "Stay tuned for some cool stuff soon!"}
                  </span>
                </p>
                <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b dark:after:from-neutral-950/85 dark:after:to-neutral-950 after:from-neutral-50/85 after:to-neutral-50 after:z-10 animate-pulse">
                  {Array.from({ length: skeletonsToShow }, (_, index) => (
                    <GridItemSkeleton key={index} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2 xs:min-h-[600px] sm:min-h-[700px] md:min-h-[650px] lg:min-h-[750px] xl:min-h-[700px]">
                {selectedButton === "items" &&
                  listings.map((listing) => (
                    <ProfileItemCard
                      key={listing.id}
                      item={listing}
                      isWin={false}
                    />
                  ))}
                {selectedButton === "wins" &&
                  profile.wins?.map((listing) => (
                    <ProfileItemCard
                      key={listing.id}
                      item={listing}
                      isWin={true}
                    />
                  ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
