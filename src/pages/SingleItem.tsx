import { useSearchParams } from "react-router-dom";
import Gallery from "../components/listing/Gallery";
import Sidebar from "../components/listing/Sidebar";
import { useSingleListing } from "../hooks/listings/useSingleListing";
import { useEffect } from "react";
import { scrollToTop } from "../utils/ScrollTop";
import ListingDetails from "../components/listing/ListingDetails";

export default function SingleItem() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { listing } = useSingleListing({
    id: id || "",
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  //TODO skeletons o tal vez algo mas bonito

  return (
    <>
      <section className=" mx-auto max-w-[600px] lg:max-w-full grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6 my-9 ">
        <div className="lg:col-span-3 xl:col-span-2 ">
          {!listing ? <div>Loading...</div> : <Gallery media={listing.media} />}
          <div className="lg:block hidden">
            {!listing ? (
              <div>Loading...</div>
            ) : (
              <ListingDetails listing={listing} />
            )}
          </div>
        </div>
        <div className=" lg:col-span-2 xl:col-span-1">
          {!listing ? <div>Loading...</div> : <Sidebar listing={listing} />}
          <div className="mt-0 xs:mt-3 lg:mt-0 lg:hidden block">
            {!listing ? (
              <div>Loading...</div>
            ) : (
              <ListingDetails listing={listing} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
