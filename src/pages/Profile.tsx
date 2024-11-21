import {
  PiSlidersHorizontalFill,
  PiSquaresFourFill,
  PiDotsNineBold,
} from "react-icons/pi";
import GridItemCard from "../components/grid/GridItemCard";
import ProfileBanner from "../components/profile/ProfileBanner";
import ItemsFilter from "../components/filter/ItemsFilter";
import ProfileNavigation from "../components/profile/ProfileNavigation";

export default function Profile() {
  return (
    <>
      <section>
        <ProfileBanner />
        <div className="px-6 -mt-20 ">
          <ProfileNavigation />
          <div className="border-t dark:border-neutral-800 border-neutral-200 px-2 flex justify-between items-center">
            <div className="mt-6 flex gap-2">
              <ItemsFilter />
              <button
                className=" flex items-center justify-center p-2 aspect-square w-[42px] rounded-lg bg-neutral-900 disabled:opacity-75 disabled:cursor-not-allowed"
                disabled
              >
                <span className="sr-only">Sort items</span>
                <PiSlidersHorizontalFill size={20} />
              </button>
            </div>
            <div className="mt-6 p-1.5 bg-neutral-900 rounded-lg flex gap-2">
              <button
                className="p-2 rounded-lg bg-neutral-950 disabled:opacity-75 disabled:cursor-not-allowed"
                disabled
              >
                <span className="sr-only">Grid 2 columns</span>
                <PiSquaresFourFill size={18} />
              </button>
              <button
                className="p-2 rounded-lg disabled:opacity-75 disabled:cursor-not-allowed "
                disabled
              >
                <span className="sr-only">Grid 3 columns</span>
                <PiDotsNineBold size={18} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 py-6 px-2">
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
        </div>
      </section>
    </>
  );
}
