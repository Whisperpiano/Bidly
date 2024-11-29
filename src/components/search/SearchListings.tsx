import Filter from "../filter/Filter";
import { FILTER_LISTINGS_OPTIONS } from "../../lib/constants";
import SortButton from "../elements/SortButton";
import GridLayoutSwitcher from "../elements/GridLayoutSwitcher";

export default function SearchListings() {
  return (
    <section>
      <div className="border-t dark:border-neutral-800 border-neutral-200 px-0 md:px-2 flex justify-between items-center">
        <div className="mt-6 flex gap-2">
          <Filter options={FILTER_LISTINGS_OPTIONS} />
          <SortButton />
        </div>
        <GridLayoutSwitcher />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2">
        {/* <GridItemCard />
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
        <GridItemCard />
        <GridItemCard />
        <GridItemCard />
        <GridItemCard /> */}
      </div>
    </section>
  );
}
