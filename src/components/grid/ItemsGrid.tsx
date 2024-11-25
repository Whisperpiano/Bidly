import Button from "../layer/Button";
import GridItemCard from "./GridItemCard";
import { PiArrowRightBold } from "react-icons/pi";

export default function ItemsGrid() {
  return (
    <section className="rounded-lg border dark:border-neutral-800 border-neutral-200 my-10 p-6">
      <header>
        <h2 className="text-xl font-semibold  border-b dark:border-neutral-800 border-neutral-200 pb-6 dark:text-neutral-50 text-neutral-900">
          Latest items
        </h2>
      </header>
      <div className="grid grid-cols-5 gap-4 pt-6">
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
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
