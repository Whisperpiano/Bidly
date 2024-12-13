import { PiImageFill } from "react-icons/pi";

export default function GridItemSkeleton() {
  return (
    <>
      <div className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2 h-fit">
        <div className="aspect-[16/10] w-full object-cover object-center rounded-lg bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 flex items-center justify-center">
          <PiImageFill
            size={30}
            className="dark:text-neutral-300 text-neutral-600 duration-0 "
          />
        </div>
        <div className="py-3">
          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[12px] my-2.5 max-w-[150px]"></div>

          <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2 max-w-[80px] flex items-center gap-1 "></div>
        </div>
        <div className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-3 grid grid-cols-2 gap-1.5 xs:gap-3">
          <div className="flex flex-col">
            <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-1.5 max-w-[50px] flex items-center gap-1 "></div>
            <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-1.5 max-w-[60px] flex items-center gap-1 "></div>
          </div>
          <div className="flex flex-col">
            <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-1.5 max-w-[50px] flex items-center gap-1 "></div>
            <div className="bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-1.5 max-w-[60px] flex items-center gap-1 "></div>
          </div>
        </div>
      </div>
    </>
  );
}
