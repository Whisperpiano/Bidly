import { useSearchParams } from "react-router-dom";
import Gallery from "../components/listing/Gallery";
import Sidebar from "../components/listing/Sidebar";
import { useSingleListing } from "../hooks/listings/useSingleListing";
import { useEffect, useState } from "react";
import { scrollToTop } from "../utils/ScrollTop";
import ListingDetails from "../components/listing/ListingDetails";
import { Listing } from "../types/types";

export default function SingleItem() {
  const [searchParams] = useSearchParams();
  const [item, setItem] = useState<Listing>();

  const id = searchParams.get("id");

  const { listing, refetch } = useSingleListing({
    id: id || "",
  });

  useEffect(() => {
    scrollToTop();
    if (id) {
      setItem(listing);
    }
  }, [id, listing]);

  //TODO skeletons o tal vez algo mas bonito

  return (
    <>
      <section className=" mx-auto max-w-[600px] lg:max-w-full grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6 my-9 ">
        <div className="lg:col-span-3 xl:col-span-2 ">
          {!item ? <div>Loading...</div> : <Gallery media={item.media} />}
          <div className="lg:block hidden">
            {!item ? <div>Loading...</div> : <ListingDetails listing={item} />}
          </div>
        </div>
        <div className=" lg:col-span-2 xl:col-span-1">
          {!item || !id ? (
            <div>Loading...</div>
          ) : (
            <Sidebar listing={item} id={id} refetch={refetch} />
          )}
          <div className="mt-0 xs:mt-3 lg:mt-0 lg:hidden block">
            {!item ? <div>Loading...</div> : <ListingDetails listing={item} />}
          </div>
        </div>
      </section>
    </>
  );
}
