import { useState } from "react";
import Badge from "../elements/Badge";
import PlaceBidModal from "../modal/PlaceBidModal";
import Creator from "./Creator";
import Winner from "./Winner";
import PricingAndTiming from "./PricingAndTiming";
import ListingOptions from "./ListingOptions";
import { AuthGuard } from "../../utils/AuthGuard";
import Alert from "../elements/Alert";

export default function Sidebar() {
  const [isPlaceBidModalOpen, setIsPlaceBidModalOpen] = useState(false);
  const isLoggedIn = AuthGuard();

  function handlePlaceBidModalOpen() {
    setIsPlaceBidModalOpen(true);
  }
  function handlePlaceBidModalClose() {
    setIsPlaceBidModalOpen(false);
  }
  return (
    <>
      <article className="animate-reveal xs:border dark:border-neutral-800 border-neutral-200 rounded-lg px-0 py-3 xs:px-3 xs:py-3 lg:px-6 lg:py-6 block lg:sticky lg:top-[141px]">
        <h1 className="text-xl lg:text-2xl font-semibold dark:text-neutral-50 text-neutral-900">
          Title of the item lorem ipsum
        </h1>

        <div className="flex gap-2 items-center pt-2 pb-4">
          <Badge text={"jewelry"} />
          <Badge text={"rings"} />
          <Badge text={"accesory"} />
        </div>

        <div className="grid grid-cols-2 py-3 border-y dark:border-neutral-800 border-neutral-200">
          <Creator />
          <Winner />
        </div>

        <div className="flex items-center justify-between py-6">
          <ListingOptions />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
          <PricingAndTiming />
        </div>

        {isLoggedIn ? (
          <div className="flex flex-col gap-3 pt-6">
            <button
              className="rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] px-4 bg-primary-600 text-neutral-50 hover:bg-primary-700 justify-center font-semibold "
              aria-label="Buy now"
              onClick={handlePlaceBidModalOpen}
            >
              Place a bid
            </button>
          </div>
        ) : (
          <div className="pt-6">
            <Alert
              text="You must be logged in to place a bid"
              type="information"
            />
          </div>
        )}
      </article>

      {/* Place a bid modal */}
      <PlaceBidModal
        isOpen={isPlaceBidModalOpen}
        onClose={handlePlaceBidModalClose}
      />
    </>
  );
}
