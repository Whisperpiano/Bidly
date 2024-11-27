export default function ProfileStats() {
  return (
    <div className="z-10 inline-flex items-center justify-center xs:justify-end absolute top-2 right-2 left-2 bottom-auto xs:top-auto xs:bottom-2">
      <div className="py-4 lg:py-5 dark:bg-neutral-950/75 bg-neutral-500/50 backdrop-blur-lg inline-flex items-center justify-center rounded-lg w-full xs:max-w-[310px] lg:max-w-[300px] ">
        <div className="px-8 flex flex-col gap-1 items-center">
          <span className="text-base font-semibold text-neutral-50">52</span>
          <span className="text-sm font-medium dark:text-neutral-400 text-neutral-200">
            Items
          </span>
        </div>

        <div className="px-8 flex flex-col gap-1 items-center border-x-2 dark:border-neutral-600/50 border-neutral-400/50">
          <span className="text-base font-semibold text-neutral-50">32</span>
          <span className="text-sm font-medium dark:text-neutral-400 text-neutral-200">
            Wins
          </span>
        </div>

        <div className="px-8 flex flex-col gap-1 items-center">
          <span className="text-base font-semibold text-neutral-50">1.2 K</span>
          <span className="text-sm font-medium dark:text-neutral-400 text-neutral-200">
            Credits
          </span>
        </div>
      </div>
    </div>
  );
}
