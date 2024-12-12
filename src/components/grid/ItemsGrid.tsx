import { Link } from "react-router-dom";
import { useResponsiveItemsGrid } from "../../hooks/responsive/useResponsiveItemsGrid";
import { PiArrowRightBold } from "react-icons/pi";
import { Listing } from "../../types/types";
import GridItemCard from "./GridItemCard";
import SectionHeader from "../home/SectionHeader";
import GridItemSkeleton from "../skeletons/GridItemSkeleton";

interface ItemsGridProps {
  title: string;
  items: Listing[];
  isLoading: boolean;
}

export default function ItemsGrid({ title, items, isLoading }: ItemsGridProps) {
  const { itemsToShow, skeletonsToShow } = useResponsiveItemsGrid(items);

  return (
    <section
      className={` rounded-lg sm:border dark:border-neutral-800 border-neutral-200 my-10 p-0 sm:p-6 ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      <SectionHeader title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-6">
        {isLoading
          ? Array.from({ length: skeletonsToShow }, (_, index) => (
              <GridItemSkeleton key={index} />
            ))
          : itemsToShow.map((item) => (
              <GridItemCard key={item.id} item={item} />
            ))}
      </div>
      <div className="pt-6">
        <Link
          to="/search/listings/all"
          className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full justify-center font-semibold "
          aria-label="View the latest listings"
        >
          View all listings
          <PiArrowRightBold className="dark:text-neutral-50 text-neutral-900 duration-0" />
        </Link>
      </div>
    </section>
  );
}
