import { Listing } from "../../types/types";
import BiddersSkeleton from "../skeletons/BiddersSkeleton";
import Bidder from "./Bidder";

export default function ListingDetails({ listing }: { listing: Listing }) {
  return (
    <article className="">
      <header className="text-sm md:text-base pt-6">
        <button className="border-b-2 dark:border-neutral-50 border-neutral-950 dark:text-neutral-50 text-neutral-900 py-2 font-semibold ">
          Overview
        </button>
        <button
          className="ml-6 py-2 disabled:text-neutral-500/90 dark:disabled:text-neutral-400/90 disabled:cursor-not-allowed opacity-75"
          disabled
        >
          Analytics
        </button>
      </header>

      <div className="border-t dark:border-neutral-800 border-neutral-200 px-2">
        <div>
          <h2 className="pt-6 text-sm md:text-base font-semibold dark:text-neutral-50 text-neutral-900">
            Description
          </h2>
          <p className="text-sm md:text-base pt-2 dark:text-neutral-50 text-neutral-900 truncate">
            {listing.description}
          </p>
        </div>
        <div className="pt-6">
          <h2 className="text-sm md:text-base font-semibold dark:text-neutral-50 text-neutral-900">
            Latest bids
          </h2>

          {listing.bids.length > 0 ? (
            <section className="border dark:border-neutral-800 border-neutral-200 rounded-lg mt-3 max-h-[425px] overflow-y-auto scrollbar-inside">
              <div className="cursor-pointer group text-sm md:text-base  p-1.5 md:p-3 ">
                {listing.bids
                  .slice()
                  .sort(
                    (a, b) =>
                      new Date(b.created).getTime() -
                      new Date(a.created).getTime()
                  )
                  .map((bid) => (
                    <Bidder key={bid.id} bid={bid} />
                  ))}
              </div>
            </section>
          ) : (
            <div className="mt-3 relative animate-fastreveal border dark:border-neutral-800 border-neutral-200 rounded-lg ">
              <p className="absolute z-20 w-full h-full max-h-screen text-center flex flex-col items-center justify-center text-xl font-semibold dark:text-neutral-50 text-neutral-900 rounded-lg">
                No active bids yet.
                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal mt-2">
                  Be the first to make a bid!
                </span>
              </p>
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b dark:after:from-neutral-950/75 dark:after:to-neutral-950  after:from-neutral-50/85 after:to-neutral-50 after:z-10 rounded-lg ">
                <BiddersSkeleton />
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
