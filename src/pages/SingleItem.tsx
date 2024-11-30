import { useSearchParams } from "react-router-dom";
import Gallery from "../components/listing/Gallery";
import Sidebar from "../components/listing/Sidebar";
import { useSingleListing } from "../hooks/listings/useSingleListing";
import { useEffect } from "react";
import { scrollToTop } from "../utils/ScrollTop";

export default function SingleItem() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const { listing } = useSingleListing({
    id: id || "",
  });

  useEffect(() => {
    scrollToTop();
  }, []);

  // console.log(isLoading);
  // console.log(isError);
  // console.log(errorMessage);

  // For the view transitions
  // import { useSearchParams } from "react-router-dom";
  // const [searchParams] = useSearchParams();
  // const img = searchParams.get("img");

  return (
    <>
      <section className=" mx-auto max-w-[600px] lg:max-w-full grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6 my-9 ">
        <div className="lg:col-span-3 xl:col-span-2 ">
          <Gallery media={listing?.media || []} />
          <div className="lg:block hidden">
            {/* <ListingDetails listing={listing} /> */}
          </div>
        </div>
        <div className=" lg:col-span-2 xl:col-span-1">
          <Sidebar />
          <div className="mt-0 xs:mt-3 lg:mt-0 lg:hidden block">
            {/* <ListingDetails listing={listing} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
