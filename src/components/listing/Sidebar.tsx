import { useEffect, useState } from "react";
import { AuthGuard } from "../../utils/AuthGuard";
import { Bidder, Listing } from "../../types/types";
import Badge from "../elements/Badge";
import PlaceBidModal from "../modal/PlaceBidModal";
import Creator from "./Creator";
import PricingAndTiming from "./PricingAndTiming";
import ListingOptions from "./ListingOptions";
import Alert from "../elements/Alert";
import LastBidder from "./LastBidder";
import { useModalStore } from "../../store/modal";

export default function Sidebar({
  listing,
  id,
  refetch,
}: {
  listing: Listing;
  id: string;
  refetch: () => void;
}) {
  const [isPlaceBidModalOpen, setIsPlaceBidModalOpen] = useState(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [lastBidder, setLastBidder] = useState<Bidder | null>(null);
  const isLoggedIn = AuthGuard();
  const { handleLoginOpen } = useModalStore();

  function handlePlaceBidModalOpen() {
    setIsPlaceBidModalOpen(true);
  }
  function handlePlaceBidModalClose() {
    setIsPlaceBidModalOpen(false);
  }

  useEffect(() => {
    const currentDate = new Date();
    const endDate = new Date(listing.endsAt);
    setIsFinished(currentDate > endDate);
  }, [listing]);

  useEffect(() => {
    if (listing.bids.length > 0) {
      const lastBidder = listing.bids
        .slice()
        .sort(
          (a, b) =>
            new Date(b.created).getTime() - new Date(a.created).getTime()
        )[0];
      setLastBidder(lastBidder);
    }
  }, [listing]);

  return (
    <>
      <article className=" xs:border dark:border-neutral-800 border-neutral-200 rounded-lg px-0 py-3 xs:px-3 xs:py-3 lg:px-6 lg:py-6 block lg:sticky lg:top-[141px]">
        <h1 className="text-xl lg:text-2xl font-semibold dark:text-neutral-50 text-neutral-900">
          {listing.title}
        </h1>

        <div className="flex gap-2 items-center pt-2 pb-4">
          {listing.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} text={tag} />
          ))}
        </div>

        <div className="grid grid-cols-2 py-3 border-y dark:border-neutral-800 border-neutral-200">
          <Creator creator={listing.seller} />
          {lastBidder && (
            <LastBidder bidder={lastBidder} isFinished={isFinished} />
          )}
        </div>

        <div className="flex items-center justify-between py-6">
          <ListingOptions refetch={refetch} />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
          <PricingAndTiming
            endsAt={listing.endsAt}
            price={lastBidder?.amount || 0}
          />
        </div>

        {!isLoggedIn && (
          <div className="pt-6">
            <Alert
              text="You must be logged in to place a bid"
              type="information"
            />
          </div>
        )}

        <div className="flex flex-col gap-3 pt-6">
          {isFinished ? (
            <div>
              <Alert text="This listing is finished" type="error" />
            </div>
          ) : (
            <button
              className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold "
              aria-label="Buy now"
              onClick={isLoggedIn ? handlePlaceBidModalOpen : handleLoginOpen}
            >
              Place a bid
            </button>
          )}
        </div>
      </article>

      {/* Place a bid modal */}
      <PlaceBidModal
        isOpen={isPlaceBidModalOpen}
        onClose={handlePlaceBidModalClose}
        price={lastBidder?.amount || 0}
        id={id}
        refetch={refetch}
      />
    </>
  );
}
