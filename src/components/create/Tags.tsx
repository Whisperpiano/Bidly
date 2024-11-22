import { PiPlusBold } from "react-icons/pi";
import DismissibleBadge from "../elements/DismissibleBadge";

export default function Tags() {
  return (
    <>
      <h2 className="mb-3 text-sm font-semibold uppercase  dark:text-neutral-50 text-neutral-900">
        Tags
      </h2>
      <p className="mb-6 text-sm dark:text-neutral-50 text-neutral-900 ">
        Tag it up! Just 3, no more, no less.
      </p>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="tags"
          className="text-xs font-medium dark:text-neutral-400 sr-only"
        >
          Item tags
        </label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="tags"
            className="p-3 rounded-lg border outline-none text-sm flex-1 dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-400"
            placeholder="Ex: jewelry"
          />
          <button
            type="button"
            className="p-2 w-[46px] rounded-lg border aspect-square grid place-items-center dark:border-neutral-900 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:hover:border-neutral-400"
          >
            <span className="sr-only">Add tag</span>
            <PiPlusBold />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <DismissibleBadge text="jewelry" />
          <DismissibleBadge text="rings" />
          <DismissibleBadge text="accesory" />
        </div>
      </div>
    </>
  );
}
