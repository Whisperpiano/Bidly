import {
  PiSealCheckFill,
  PiShareNetworkFill,
  PiDotsThreeBold,
  PiCaretDownBold,
  PiSlidersHorizontalFill,
  PiSquaresFourFill,
  PiDotsNineBold,
} from "react-icons/pi";
import Button from "../components/layer/Button";
import GridItemCard from "../components/grid/GridItemCard";

export default function Profile() {
  return (
    <>
      <section>
        {/* Banner */}
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1667912925305-629794bdb691?q=80&w=2621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 8"
            className="h-[300px] w-full object-cover object-center rounded-lg"
          />
          <div className="dark:bg-neutral-950/75 z-10 backdrop-blur-lg inline-flex items-center gap-10 p-6 rounded-lg absolute bottom-2 right-2">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-base font-semibold dark:text-neutral-50">
                52
              </span>
              <span className="text-sm font-semibold dark:text-neutral-400">
                Items
              </span>
            </div>
            <div
              aria-disabled
              className="dark:bg-neutral-500/25 w-0.5 h-10"
            ></div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-base font-semibold dark:text-neutral-50">
                32
              </span>
              <span className="text-sm font-semibold dark:text-neutral-400">
                Wins
              </span>
            </div>
            <div
              aria-disabled
              className="dark:bg-neutral-500/25 w-0.5 h-10"
            ></div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-base font-semibold dark:text-neutral-50">
                1.2 K
              </span>
              <span className="text-sm font-semibold dark:text-neutral-400">
                Credits
              </span>
            </div>
          </div>
        </div>
        {/* Profile */}
        <div className="flex justify-between p-6 -translate-y-1/2">
          <div className="flex items-end gap-4">
            <img
              src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="alt placeholder 1"
              className="aspect-square w-28 object-cover object-center rounded-lg border dar:border-neutral-950 border-neutral-50"
            />
            <div className="flex gap-1 items-center mb-2">
              <h1 className="text-xl font-semibold">username</h1>
              <PiSealCheckFill size={16} className="text-yellow-400" />
            </div>
          </div>
          <div className="flex gap-2 items-end">
            <Button type="outlined" ariaLabel="Share profile">
              <span className="sr-only">Share profile</span>
              <PiShareNetworkFill />
            </Button>
            <Button type="outlined" ariaLabel="Profile options">
              <span className="sr-only">Profile options</span>
              <PiDotsThreeBold size={20} />
            </Button>
          </div>
        </div>

        {/* Items */}
        <div className="px-6 -mt-20 ">
          <header>
            <button className="border-b-2 dark:border-neutral-50 border-neutral-950 py-2 font-semibold">
              Items
            </button>
            <button
              className="ml-6 py-2 disabled:opacity-75 disabled:pointer-events-none"
              disabled
            >
              Wins
            </button>
            <button
              className="ml-6 py-2 disabled:opacity-75 disabled:pointer-events-none"
              disabled
            >
              About
            </button>
            <button
              className="ml-6 py-2 disabled:opacity-75 disabled:pointer-events-none"
              disabled
            >
              Activity
            </button>
          </header>
          <div className="border-t dark:border-neutral-800 border-neutral-200 px-2 flex justify-between items-center">
            <div className="mt-6 flex gap-2">
              <Button type="filter" ariaLabel="Sort items">
                <span className="sr-only">Sort items</span>
                <span>Sort by newest</span>
                <PiCaretDownBold />
              </Button>
              <Button type="filter" ariaLabel="Sort items">
                <span className="sr-only">Sort items</span>
                <PiSlidersHorizontalFill size={20} />
              </Button>
            </div>
            <div className="mt-6 p-1.5 bg-neutral-900 rounded-lg flex gap-2">
              <button className="p-2 rounded-lg bg-neutral-950">
                <span className="sr-only">Grid 2 columns</span>
                <PiSquaresFourFill size={18} />
              </button>
              <button className="p-2 rounded-lg ">
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
