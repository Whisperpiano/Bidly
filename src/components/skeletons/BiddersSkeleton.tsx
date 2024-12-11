import { PiImageFill } from "react-icons/pi";

export default function BiddersSkeleton() {
  return (
    <div className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-1.5 md:p-3 flex flex-col gap-3 ">
      <div className="dark:bg-neutral-900 bg-neutral-100 flex items-center justify-between p-1.5 md:p-3 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="aspect-square w-10 md:w-14 rounded-lg bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 flex items-center justify-center">
            <PiImageFill
              size={18}
              className="dark:text-neutral-300 text-neutral-600 duration-0 "
            />
          </div>
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2.5 w-[150px]"></div>
        </div>
        <div className="py-3">
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 w-[60px] flex items-center gap-1 "></div>
        </div>
      </div>
      <div className="dark:bg-neutral-900 bg-neutral-100 flex items-center justify-between p-1.5 md:p-3 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="aspect-square w-10 md:w-14 rounded-lg bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 flex items-center justify-center">
            <PiImageFill
              size={18}
              className="dark:text-neutral-300 text-neutral-600 duration-0 "
            />
          </div>
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2.5 w-[150px]"></div>
        </div>
        <div className="py-3">
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 w-[60px] flex items-center gap-1 "></div>
        </div>
      </div>
      <div className="dark:bg-neutral-900 bg-neutral-100 flex items-center justify-between p-1.5 md:p-3 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="aspect-square w-10 md:w-14 rounded-lg bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 flex items-center justify-center">
            <PiImageFill
              size={18}
              className="dark:text-neutral-300 text-neutral-600 duration-0 "
            />
          </div>
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2.5 w-[150px]"></div>
        </div>
        <div className="py-3">
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 w-[60px] flex items-center gap-1 "></div>
        </div>
      </div>
    </div>
  );
}
