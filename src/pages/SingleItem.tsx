import Gallery from "../components/listing/Gallery";
import ListingDetails from "../components/listing/ListingDetails";
import Sidebar from "../components/listing/Sidebar";

export default function SingleItem() {
  // For the view transitions
  // import { useSearchParams } from "react-router-dom";
  // const [searchParams] = useSearchParams();
  // const img = searchParams.get("img");

  return (
    <>
      <section className=" mx-auto max-w-[600px] lg:max-w-full grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6 my-9 ">
        <div className="lg:col-span-3 xl:col-span-2 ">
          <Gallery />
          <div className="lg:block hidden">
            <ListingDetails />
          </div>
        </div>
        <div className=" lg:col-span-2 xl:col-span-1">
          <Sidebar />
          <div className="mt-0 xs:mt-3 lg:mt-0 lg:hidden block">
            <ListingDetails />
          </div>
        </div>
      </section>
    </>
  );
}
