import { Listing } from "../../types/types";
import Bidder from "./Bidder";

//TODO: maybe accordion on bids

export default function ListingDetails({ listing }: { listing: Listing }) {
  return (
    <article className="animate-reveal">
      <header className="text-sm md:text-base pt-6">
        <button className="border-b-2 dark:border-neutral-50 border-neutral-950 dark:text-neutral-50 text-neutral-900 py-2 font-semibold ">
          Overview
        </button>
        <button
          className="ml-6 py-2 disabled:text-neutral-500/90 dark:disabled:text-neutral-400/90 disabled:pointer-events-none"
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
          <p className="text-sm md:text-base pt-2 dark:text-neutral-50 text-neutral-900">
            {listing.description}
          </p>
        </div>
        <div className="pt-6">
          <h2 className="text-sm md:text-base font-semibold dark:text-neutral-50 text-neutral-900">
            Latest bids
          </h2>
          {listing.bids.length > 0 ? (
            <section className="border dark:border-neutral-800 border-neutral-200 rounded-lg mt-3">
              <div className="cursor-pointer group text-sm md:text-base  p-1.5 md:p-3 ">
                {listing.bids.map((bid) => (
                  <Bidder key={bid.id} bid={bid} />
                ))}
              </div>
            </section>
          ) : (
            <section className="aspect-[16/4] border dark:border-neutral-800 border-neutral-200 rounded-lg mt-3">
              <p className="grid place-items-center h-full text-base md:text-lg dark:text-neutral-400 text-neutral-500">
                No active bids yet. Be the first to make a bid!
              </p>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
