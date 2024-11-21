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
      <section className="grid grid-cols-3 gap-6 ">
        <div className="col-span-2">
          <Gallery />
          <ListingDetails />
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </>
  );
}
