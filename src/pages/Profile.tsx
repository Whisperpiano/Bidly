import { useParams } from "react-router-dom";
import FilterAndSort from "../components/profile/FilterAndSort";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileNavigationHeader from "../components/profile/ProfileNavigationHeader";
import { useEffect, useState } from "react";
import { Listing, UserProfile } from "../types/types";
import getSingleProfile from "../api/profiles/getSingleProfile";
import ProfileItemCard from "../components/grid/ProfileItemCard";
import { sortListings } from "../utils/sortListings";

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchProfile() {
      try {
        if (!username) {
          setIsError(true);
          setErrorMessage("Invalid username provided");
          return;
        }
        const profile = await getSingleProfile({ username });

        if (!profile) {
          setIsError(true);
          setErrorMessage("Invalid profile");
          return;
        }

        if ("data" in profile) {
          setIsError(false);
          setErrorMessage("");
          setProfile(profile.data);
        } else if ("errors" in profile) {
          setIsError(true);
          setErrorMessage(profile?.errors?.[0]?.message || "Unknown error");
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(` Something went wrong fetching the profile: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, [username]);

  useEffect(() => {
    if (!profile) return;

    const sortedListings = sortListings(profile.listings, selectedFilter);
    setListings(sortedListings);
  }, [profile, selectedFilter]);

  console.log(errorMessage);
  console.log(isLoading);
  console.log(isError);

  // TODO hacer mejor el loading
  return (
    <>
      <section className="mt-6">
        {!profile ? <div>Loading...</div> : <ProfileBanner profile={profile} />}
        <div className="px-2 md:px-4 lg:px-6 -mt-8 sm:-mt-12  md:-mt-16 lg:-mt-20 ">
          <ProfileNavigationHeader />
          <FilterAndSort
            filter={selectedFilter}
            setFilter={setSelectedFilter}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2">
            {listings.map((listing) => (
              <ProfileItemCard key={listing.id} item={listing} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
