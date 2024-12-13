import { Link } from "react-router-dom";
import { ProfileBid } from "../../types/types";
import TimeLeft from "../elements/TimeLeft";
import { useEffect, useState } from "react";
import getSingleListing from "../../api/listings/getSIngleListing";

export default function ProfileBidCard({
  item,
  username,
}: {
  item: ProfileBid;
  username: string;
}) {
  const [isWinning, setIsWinning] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const id = item.listing.id;

    async function fetchListing() {
      setIsLoading(true);
      const response = await getSingleListing({ id });
      if (!response) return;

      if ("data" in response && Array.isArray(response.data.bids)) {
        const sortedBids = response.data.bids.sort(
          (a, b) => b.amount - a.amount
        );

        const topBid = sortedBids[0];
        if (topBid && topBid.bidder.name === username) {
          setIsWinning(true);
        } else {
          setIsWinning(false);
        }
      }
      setIsLoading(false);
    }

    fetchListing();
  }, [username, item]);

  return (
    <Link
      to={`/listing/${item.listing.title
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
        .split(" ")
        .join("-")}?id=${item.listing.id}`}
      aria-label={`View details for the ${item.listing.title} item`}
      viewTransition
    >
      <article className="relative border dark:border-neutral-800 border-neutral-200 rounded-lg p-2 transition-all duration-300 hover:border-neutral-400 hover:dark:border-neutral-600 hover:-translate-y-2 animate-reveal">
        <span
          className={`absolute top-4 right-2 min-w-[64px] min-h-[20px] text-sm font-medium me-2 px-2.5 py-0.5 rounded flex justify-center ${
            isLoading
              ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 animate-pulse"
              : isWinning
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
          }`}
        >
          {isLoading ? "Loading..." : isWinning ? "Winning" : "Loosing"}
        </span>

        <div>
          <img
            src={
              item.listing.media.length > 0
                ? item.listing.media[0].url
                : "https://placehold.co/260x160"
            }
            alt={`Image of the ${item.listing.title} listing`}
            className="aspect-[16/10] w-full h-full object-cover object-center rounded-lg "
          />
        </div>

        <div className="py-3">
          <h3 className="text-base xs:text-lg font-semibold dark:text-neutral-50 text-neutral-900 truncate">
            {item.listing.title}
          </h3>

          <span
            className={`block text-xs xs:text-sm font-normal gap-1 truncate ${
              isWinning
                ? "text-green-800 dark:text-green-300"
                : "text-red-800 dark:text-red-300"
            }`}
          >
            {item.amount} NOFF
          </span>
        </div>

        <footer className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-3 ">
          <div className="flex items-center justify-between">
            <span className="dark:text-neutral-400 text-neutral-600 font-semibold text-xs xs:text-sm">
              Finishing
            </span>
            <TimeLeft endsAt={item.listing.endsAt} />
          </div>
        </footer>
      </article>
    </Link>
  );
}
