import { useRef, useState } from "react";
import {
  PiArrowClockwiseBold,
  PiCheckBold,
  PiDotsThreeBold,
  PiShareFatFill,
} from "react-icons/pi";
import Spinner from "../elements/Spinner";

//TODO refresh button

export default function ListingOptions({ refetch }: { refetch: () => void }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
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

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      refetch();
      // to simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
    } catch (error) {
      console.error(error);
    } finally {
      setIsRefreshing(false);
    }
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
        <button
          className="group flex gap-1 items-center text-sm dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 font-medium"
          onClick={handleRefresh}
        >
          {isRefreshing ? (
            <Spinner>
              <span className="ml-1.5">Updating...</span>
            </Spinner>
          ) : (
            <>
              <PiArrowClockwiseBold className="dark:text-neutral-400 group-hover:dark:text-neutral-200 text-neutral-500 group-hover::text-neutral-700 duration-0" />
              Update
            </>
          )}
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
