export default function Submit({ handleBack }: { handleBack: () => void }) {
  return (
    <>
      <p className="py-3 text-xl font-semibold dark:text-neutral-50 text-neutral-900">
        No money, no worries!
      </p>
      <p className="p-1.5 sm:p-3 text-sm font-normal dark:text-neutral-300 text-neutral-700 text-pretty">
        When your item sells, you earn NOFF coins (our totally awesome, made-up
        currency). No hidden fees, no fine print, just pure trading fun. By
        clicking “Create item”, you agree to our rules (basically, play nice),
        take full responsabillity for your listing and let the magic of NOFF
        coins do the rest!
      </p>

      <div className="mb-3 flex flex-col gap-3 pt-6 max-w-[380px] mx-auto">
        <button
          className="w-full p-2.5 rounded-lg text-sm font-medium dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-700 bg-primary-600 text-neutral-50 hover:bg-primary-700"
          aria-label="Buy now"
        >
          Create item
        </button>
        <button
          type="button"
          className="w-full p-2.5 rounded-lg text-sm font-medium dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-50 bg-neutral-200/50 text-neutral-900 hover:bg-neutral-200"
          aria-label="Discard changes"
          onClick={handleBack}
        >
          Discard
        </button>
      </div>
    </>
  );
}
