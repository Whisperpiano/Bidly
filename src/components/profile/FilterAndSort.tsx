import Filter from "../filter/Filter";
import { FILTER_PROFILE_OPTIONS } from "../../lib/constants";
import SortButton from "../elements/SortButton";
import GridLayoutSwitcher from "../elements/GridLayoutSwitcher";

export default function FilterAndSort({
  filter,
  setFilter,
}: {
  filter: string | null;
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <div className="border-t dark:border-neutral-800 border-neutral-200 px-0 md:px-2 flex justify-between items-center">
      <div className="mt-6 flex gap-2">
        <Filter
          options={FILTER_PROFILE_OPTIONS}
          selected={filter}
          setSelected={setFilter}
        />
        <SortButton />
      </div>
      <GridLayoutSwitcher />
    </div>
  );
}
