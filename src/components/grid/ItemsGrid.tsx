import { useEffect, useState } from "react";
import { PiArrowRightBold } from "react-icons/pi";
import GridItemCard from "./GridItemCard";
import { Link } from "react-router-dom";
import SectionHeader from "../home/SectionHeader";
import { Listing } from "../../types/types";

interface ItemsGridProps {
  title: string;
  items: Listing[];
}

export default function ItemsGrid({ title, items }: ItemsGridProps) {
  const [itemsToShow, setItemsToShow] = useState(items);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setItemsToShow(items.slice(0, 10));
      } else if (width >= 1024) {
        setItemsToShow(items.slice(0, 8));
      } else if (width >= 768) {
        setItemsToShow(items.slice(0, 6));
      } else {
        setItemsToShow(items.slice(0, 4));
      }
    };
    updateNumberOfItems();
    window.addEventListener("resize", updateNumberOfItems);
    return () => {
      window.removeEventListener("resize", updateNumberOfItems);
    };
  }, [items]);

  console.log(itemsToShow);

  return (
    <section className="rounded-lg sm:border dark:border-neutral-800 border-neutral-200 my-10 p-0 sm:p-6">
      <SectionHeader title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-6">
        {itemsToShow.map((item) => (
          <GridItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="pt-6">
        <Link
          to="/search/listings/all"
          className="rounded-lg text-sm flex items-center gap-2 h-[42px] bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 w-full justify-center font-semibold "
          aria-label="View the latest items"
        >
          View all items
          <PiArrowRightBold className="dark:text-neutral-50 text-neutral-900 duration-0" />
        </Link>
      </div>
    </section>
  );
}
