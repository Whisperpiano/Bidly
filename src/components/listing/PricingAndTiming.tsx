import TimeLeft from "../elements/TimeLeft";

export default function PricingAndTiming({
  endsAt,
  price,
}: {
  endsAt: string;
  price: number;
}) {
  return (
    <>
      <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200/50 text-xs xs:text-sm">
        <span className="dark:text-neutral-400 text-neutral-600">Price</span>
        <span className="dark:text-neutral-50 text-neutral-900">
          {price} NOFF
        </span>
      </div>
      <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200/50 text-xs xs:text-sm">
        <span className="dark:text-neutral-400 text-neutral-600">
          Sale ends
        </span>
        <TimeLeft endsAt={endsAt} />
      </div>
    </>
  );
}
