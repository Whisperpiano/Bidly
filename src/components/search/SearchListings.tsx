import {
  PiDotsNineBold,
  PiSlidersHorizontalFill,
  PiSquaresFourFill,
} from "react-icons/pi";
import Filter from "../filter/Filter";
import GridItemCard from "../grid/GridItemCard";
import { FILTER_LISTINGS_OPTIONS } from "../../lib/constants";

export default function SearchListings() {
  return (
    <section>
      <div className="border-t dark:border-neutral-800 border-neutral-200 px-0 md:px-2 flex justify-between items-center">
        <div className="mt-6 flex gap-2">
          <Filter options={FILTER_LISTINGS_OPTIONS} />
          <button
            className=" flex items-center justify-center p-2 aspect-square w-[36px] sm:w-[42px] rounded-lg dark:bg-neutral-900 bg-neutral-200/50 disabled:cursor-not-allowed  "
            disabled
          >
            <span className="sr-only">Sort items</span>
            <PiSlidersHorizontalFill
              size={20}
              className="dark:text-neutral-200 text-neutral-700 duration-0"
            />
          </button>
        </div>
        <div className="mt-6  p-1 sm:p-1.5 h-[36px] sm:h-[42px] dark:bg-neutral-900 bg-neutral-200/50 rounded-lg flex gap-2">
          <button
            className="p-1 sm:p-1.5 rounded-lg dark:bg-neutral-950 bg-neutral-300 disabled:cursor-not-allowed"
            disabled
          >
            <span className="sr-only">Grid 2 columns</span>
            <PiSquaresFourFill
              size={18}
              className="dark:text-neutral-200 text-neutral-800 duration-0"
            />
          </button>
          <button
            className="p-1 sm:p-1.5 rounded-lg  disabled:cursor-not-allowed "
            disabled
          >
            <span className="sr-only">Grid 3 columns</span>
            <PiDotsNineBold
              size={18}
              className="dark:text-neutral-200 text-neutral-800 duration-0"
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2">
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
      </div>
    </section>
  );
}
