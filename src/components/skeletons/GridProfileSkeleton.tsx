import { PiImageFill } from "react-icons/pi";

export default function GridProfileSkeleton() {
  return (
    <>
      <div className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2">
        <div className="relative">
          <div className="w-full h-[120px] rounded-lg bg-neutral-300/75 dark:bg-neutral-600/75 dark:bg-gr-neutral-700 flex items-center justify-center">
            <PiImageFill
              size={30}
              className="dark:text-neutral-300 text-neutral-600 duration-0 "
            />
          </div>
          <div className="aspect-square w-14  absolute bottom-0 left-2 translate-y-1/2 z-10 rounded-lg bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 flex items-center justify-center">
            <PiImageFill
              size={18}
              className="dark:text-neutral-300 text-neutral-600 duration-0 "
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div>
            <div className="ml-3 bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[8px] my-2.5 w-[120px] "></div>
            <div className="ml-3 bg-neutral-300 dark:bg-neutral-600 dark:bg-gr-neutral-700 rounded-lg h-[6px] my-2.5 w-[50px] "></div>
          </div>
          <div className="rounded-lg dark:bg-neutral-800 bg-neutral-200 w-[91px] h-[38px]"></div>
        </div>
      </div>
    </>
  );
}
