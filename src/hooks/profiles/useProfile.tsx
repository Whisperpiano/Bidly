import { useEffect, useState } from "react";
import { Listing, Media } from "../../types/types";
import { useNavigate, useParams } from "react-router-dom";
import getSingleProfile from "../../api/profiles/getSingleProfile";
import { sortListings } from "../../utils/sortListings";

interface Profile {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
  credits: number;
  listings?: Listing[];
  wins?: Listing[];
  _count: {
    listings: number;
    wins: number;
  };
}

const emptyProfile: Profile = {
  name: "",
  email: "",
  bio: null,
  avatar: { url: "", alt: "" },
  banner: { url: "", alt: "" },
  credits: 0,
  _count: { listings: 0, wins: 0 },
};

export function useProfile() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [listings, setListings] = useState<Listing[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function fetchProfile() {
      try {
        if (!username) {
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
          navigate("/not-found");
        }
      } catch (error) {
        setIsError(true);
        setErrorMessage(`Something went wrong fetching the profile: ${error}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
  }, [username, navigate]);

  useEffect(() => {
    if (!profile?.listings) return;

    const sortedListings = sortListings(profile.listings, selectedFilter);
    setListings(sortedListings);
  }, [profile, selectedFilter]);

  return {
    profile,
    listings,
    selectedFilter,
    setSelectedFilter,
    isLoading,
    isError,
    errorMessage,
  };
}
