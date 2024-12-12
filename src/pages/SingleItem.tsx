import { useEffect, useState } from "react";
import { useSingleListing } from "../hooks/listings/useSingleListing";
import { useModalStore } from "../store/modal";
import { scrollToTop } from "../utils/ScrollTop";
import { Bidder } from "../types/types";
import Gallery from "../components/listing/Gallery";
import Sidebar from "../components/listing/Sidebar";
import ListingDetails from "../components/listing/ListingDetails";
import Spinner from "../components/elements/Spinner";
import PlaceBidModal from "../components/modal/PlaceBidModal";

export default function SingleItem() {
  const { listing, refetch, id } = useSingleListing();
  const [lastBidder, setLastBidder] = useState<Bidder | null>(null);

  // Modal logic
  const { isPlaceABidOpen, handlePlaceABidClose } = useModalStore();

  // Scroll to top of the page when the listing is loaded
  useEffect(() => {
    scrollToTop();
  }, []);

  // Get the last bidder of the listing
  useEffect(() => {
    if (!listing) return;
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
      {!listing ? (
        <div className="w-full h-screen flex items-center justify-center -translate-y-[100px]">
          <Spinner />
        </div>
      ) : (
        <>
          <section className="animate-reveal mx-auto max-w-[600px] lg:max-w-full grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6 my-9 ">
            <div className="lg:col-span-3 xl:col-span-2 ">
              <Gallery media={listing.media} />
              <div className="lg:block hidden">
                <ListingDetails listing={listing} />
              </div>
            </div>
            <div className=" lg:col-span-2 xl:col-span-1">
              <Sidebar
                listing={listing}
                id={id}
                refetch={refetch}
                lastBidder={lastBidder}
              />

              <div className="mt-0 xs:mt-3 lg:mt-0 lg:hidden block">
                <ListingDetails listing={listing} />
              </div>
            </div>
          </section>

          {/* Modal for place a bid */}
          <PlaceBidModal
            isOpen={isPlaceABidOpen}
            onClose={handlePlaceABidClose}
            price={lastBidder?.amount || 0}
            id={listing.id}
            refetch={refetch}
          />
        </>
      )}
    </>
  );
}
