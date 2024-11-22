import { PiXBold } from "react-icons/pi";

export default function DismissibleBadge({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-1.5 dark:bg-neutral-800 bg-neutral-100 text-sm dark:text-neutral-300 text-neutral-600 rounded-lg pl-2 pr-1 py-1">
      {text}
      <button
        type="button"
        className="rounded-full p-0.5 dark:hover:bg-neutral-900 dark:hover:text-neutral-50"
        aria-label="Remove tag"
      >
        <span className="sr-only">Remove tag</span>
        <PiXBold />
      </button>
    </span>
  );
}
