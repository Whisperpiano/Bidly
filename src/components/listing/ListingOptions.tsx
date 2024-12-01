import { useRef, useState } from "react";
import {
  PiArrowClockwiseBold,
  PiCheckBold,
  PiDotsThreeBold,
  PiShareFatFill,
} from "react-icons/pi";

//TODO refresh button

export default function ListingOptions() {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>();

  const copyToClipboard = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <button
          className={`group flex gap-1 items-center text-sm font-medium ${
            isCopied
              ? "dark:text-blue-400 text-blue-600"
              : "dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700"
          }`}
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <PiCheckBold
              size={14}
              className="dark:text-blue-400 text-blue-600"
            />
          ) : (
            <PiShareFatFill className="dark:text-neutral-400 group-hover:dark:text-neutral-200 text-neutral-500 group-hover:text-neutral-700 duration-0" />
          )}

          {isCopied ? "Copied" : "Share"}
        </button>
        <button className="group flex gap-1 items-center text-sm dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 font-medium">
          <PiArrowClockwiseBold className="dark:text-neutral-400 group-hover:dark:text-neutral-200 text-neutral-500 group-hover::text-neutral-700 duration-0" />
          Refresh
        </button>
      </div>
      <button
        className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 disabled:cursor-not-allowed"
        disabled
      >
        <span className="sr-only">Options</span>
        <PiDotsThreeBold
          size={20}
          className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 duration-0"
        />
      </button>
    </>
  );
}
