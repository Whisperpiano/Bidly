import {
  PiArrowClockwiseBold,
  PiCheckBold,
  PiShareFatFill,
} from "react-icons/pi";
import Spinner from "../elements/Spinner";
import useCopyToClipboard from "../../hooks/general/useCopyToClipboard";
import useRefresh from "../../hooks/general/useRefresh";

export default function ListingOptions({ refetch }: { refetch: () => void }) {
  // Logic to copy the link to clipboard
  const { isCopied, copyToClipboard } = useCopyToClipboard(4000);
  // Logic to refresh the listing
  const { isRefreshing, handleRefresh } = useRefresh(refetch);

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
    </>
  );
}
