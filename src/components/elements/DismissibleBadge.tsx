import { PiXBold } from "react-icons/pi";

export default function DismissibleBadge({
  text,
  onDismiss,
}: {
  text: string;
  onDismiss: () => void;
}) {
  return (
    <span className="flex items-center gap-1.5 dark:bg-neutral-800 bg-neutral-200/50 text-sm dark:text-neutral-300 text-neutral-600 rounded-lg pl-2 pr-1 py-1">
      {text}
      <button
        type="button"
        className="rounded-full p-0.5 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 hover:text-neutral-900"
        aria-label="Remove tag"
        onClick={onDismiss}
      >
        <span className="sr-only">Remove tag</span>
        <PiXBold className="dark:text-neutral-300 text-neutral-800 duration-0" />
      </button>
    </span>
  );
}
