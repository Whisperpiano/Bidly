export default function ProfileNavigation() {
  return (
    <header>
      <button className="border-b-2 dark:border-neutral-50 border-neutral-950 py-2 font-semibold">
        Items
      </button>
      <button
        className="ml-6 py-2 disabled:opacity-75 disabled:cursor-not-allowed"
        disabled
      >
        Wins
      </button>
      <button
        className="ml-6 py-2 disabled:opacity-75  disabled:cursor-not-allowed"
        disabled
      >
        About
      </button>
      <button
        className="ml-6 py-2 disabled:opacity-75 disabled:cursor-not-allowed"
        disabled
      >
        Activity
      </button>
    </header>
  );
}
