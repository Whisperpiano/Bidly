import { PiSlidersHorizontalFill } from "react-icons/pi";

export default function SortButton() {
  return (
    <button
      className="flex items-center justify-center p-2 aspect-square w-[36px] sm:w-[42px] rounded-lg dark:bg-neutral-900 bg-neutral-200/50 disabled:cursor-not-allowed  "
      disabled
    >
      <span className="sr-only">Sort items</span>
      <PiSlidersHorizontalFill
        size={20}
        className="dark:text-neutral-200 text-neutral-700 duration-0"
      />
    </button>
  );
}
