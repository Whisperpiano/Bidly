import { useEffect, useState } from "react";
import Button from "../layer/Button";
import GridItemCard from "./GridItemCard";
import { PiArrowRightBold } from "react-icons/pi";

export default function ItemsGrid() {
  const [numberOfItems, setNumberOfItems] = useState(10);

  useEffect(() => {
    const updateNumberOfItems = () => {
      const width = window.innerWidth;

      if (width >= 1280) setNumberOfItems(10);
      else if (width >= 1024) setNumberOfItems(8);
      else if (width >= 768) setNumberOfItems(6);
      else setNumberOfItems(4);
    };
    updateNumberOfItems();
    window.addEventListener("resize", updateNumberOfItems);
    return () => {
      window.removeEventListener("resize", updateNumberOfItems);
    };
  }, []);

  return (
    <section className="rounded-lg sm:border dark:border-neutral-800 border-neutral-200 my-10 p-0 sm:p-6">
      <header>
        <h2 className="text-xl font-semibold  border-b dark:border-neutral-800 border-neutral-200 pb-6 dark:text-neutral-50 text-neutral-900">
          Latest items
        </h2>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-6">
        {Array.from({ length: numberOfItems }, (_, index) => (
          <GridItemCard key={index} />
        ))}
      </div>
      <div className="pt-6">
        <Button type="secondary" ariaLabel="test">
          View all items
          <PiArrowRightBold className="dark:text-neutral-50 text-neutral-900 duration-0" />
        </Button>
      </div>
    </section>
  );
}
