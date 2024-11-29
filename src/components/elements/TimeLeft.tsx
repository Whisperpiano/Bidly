import { useEffect, useState } from "react";
import { formatDateFromISO } from "../../utils/formatDateFromISO";

export default function TimeLeft({ endsAt }: { endsAt: string }) {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<string>(formatDateFromISO(endsAt));

  useEffect(() => {
    const endDate = new Date(endsAt);

    const updateTimeLeft = () => {
      const currentDate = new Date();
      if (endDate <= currentDate) {
        setIsFinished(true);
        setTimeLeft("Finished");
      } else {
        setIsFinished(false);
        const remainingTime = formatDateFromISO(endsAt);
        setTimeLeft(remainingTime);
      }
    };

    updateTimeLeft();

    const intervalId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [endsAt]);

  return (
    <time
      className="flex gap-1 items-center dark:text-neutral-50 text-neutral-900 font-semibold text-xs xs:text-sm"
      dateTime={endsAt}
    >
      <div
        className={`w-2 h-2 rounded-full ${
          isFinished ? "bg-red-400" : "bg-green-400"
        }`}
        aria-hidden
      ></div>
      {timeLeft}
    </time>
  );
}
