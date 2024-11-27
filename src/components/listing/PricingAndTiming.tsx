export default function PricingAndTiming() {
  return (
    <>
      <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200/50">
        <span className="dark:text-neutral-400 text-neutral-600">Price</span>
        <span className="dark:text-neutral-50 text-neutral-900">100 NOFF</span>
      </div>
      <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200/50">
        <span className="dark:text-neutral-400 text-neutral-600">
          Sale ends
        </span>
        <time className="flex gap-1 items-center dark:text-neutral-50 text-neutral-900 ">
          <div className="w-2 h-2 rounded-full bg-green-400" aria-hidden></div>
          6d 12h
        </time>
      </div>
    </>
  );
}
