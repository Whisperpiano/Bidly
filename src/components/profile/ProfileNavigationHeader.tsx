export default function ProfileNavigationHeader() {
  return (
    <header className="text-sm md:text-base">
      <button className="border-b-2 dark:text-neutral-50 text-neutral-900 dark:border-neutral-50 border-neutral-950 py-2 font-semibold">
        Items
      </button>
      <button
        className="ml-6 py-2 disabled:text-neutral-500/90 dark:disabled:text-neutral-400/90 disabled:cursor-not-allowed"
        disabled
      >
        Wins
      </button>
      <button
        className="ml-6 py-2 disabled:text-neutral-500/90 dark:disabled:text-neutral-400/90 disabled:cursor-not-allowed"
        disabled
      >
        About
      </button>
      <button
        className="ml-6 py-2 disabled:text-neutral-500/90 dark:disabled:text-neutral-400/90 disabled:cursor-not-allowed"
        disabled
      >
        Activity
      </button>
    </header>
  );
}
