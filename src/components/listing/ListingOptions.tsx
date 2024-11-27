import {
  PiArrowClockwiseBold,
  PiDotsThreeBold,
  PiShareFatFill,
} from "react-icons/pi";

export default function ListingOptions() {
  return (
    <>
      <div className="flex gap-4 items-center">
        <button className="flex gap-1 items-center text-sm dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 font-medium">
          <PiShareFatFill className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 duration-0" />
          Share
        </button>
        <button className="flex gap-1 items-center text-sm dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 font-medium">
          <PiArrowClockwiseBold className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 duration-0" />
          Refresh
        </button>
      </div>
      <button className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700">
        <span className="sr-only">Options</span>
        <PiDotsThreeBold
          size={20}
          className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 duration-0"
        />
      </button>
    </>
  );
}
