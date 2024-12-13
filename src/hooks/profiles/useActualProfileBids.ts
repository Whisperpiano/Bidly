import { useEffect, useState } from "react";
import { ProfileBid } from "../../types/types";
import getBids from "../../api/listings/getBids";

interface UseBidsResult {
  bids: ProfileBid[];
  isLoading: boolean;
}

export function useActualProfileBids(username?: string): UseBidsResult {
  const [bids, setBids] = useState<ProfileBid[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBids() {
      if (!username) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      try {
        const response = await getBids({ username });
        if (!response || !("data" in response)) {
          setIsLoading(false);
          return;
        }

        const uniqueBids = response.data.reduce(
          (acc: ProfileBid[], bid: ProfileBid) => {
            const listingEndsAt = new Date(bid.listing.endsAt);
            const now = new Date();

            if (listingEndsAt <= now) {
              return acc;
            }

            const existingBidIndex = acc.findIndex(
              (item) => item.listing.id === bid.listing.id
            );

            if (existingBidIndex === -1) {
              acc.push(bid);
            } else if (bid.amount > acc[existingBidIndex].amount) {
              acc[existingBidIndex] = bid;
            }

            return acc;
          },
          []
        );

        setBids(uniqueBids);
      } catch (error) {
        console.error("Error fetching bids:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchBids();
  }, [username]);

  return { bids, isLoading };
}
