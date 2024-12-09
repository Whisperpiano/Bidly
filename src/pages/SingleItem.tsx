import Gallery from "../components/listing/Gallery";
import Sidebar from "../components/listing/Sidebar";
import { useSingleListing } from "../hooks/listings/useSingleListing";
import { useEffect } from "react";
import { scrollToTop } from "../utils/ScrollTop";
import ListingDetails from "../components/listing/ListingDetails";
import Spinner from "../components/elements/Spinner";

export default function SingleItem() {
  const { listing, refetch, id } = useSingleListing();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {!listing ? (
        <div className="w-full h-screen flex items-center justify-center -translate-y-[100px]">
          <Spinner />
        </div>
      ) : (
        <section className="animate-reveal mx-auto max-w-[600px] lg:max-w-full grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6 my-9 ">
          <div className="lg:col-span-3 xl:col-span-2 ">
            <Gallery media={listing.media} />
            <div className="lg:block hidden">
              <ListingDetails listing={listing} />
            </div>
          </div>
          <div className=" lg:col-span-2 xl:col-span-1">
            <Sidebar listing={listing} id={id} refetch={refetch} />

            <div className="mt-0 xs:mt-3 lg:mt-0 lg:hidden block">
              <ListingDetails listing={listing} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
