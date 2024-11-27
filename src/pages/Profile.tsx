import GridItemCard from "../components/grid/GridItemCard";
import FilterAndSort from "../components/profile/FilterAndSort";
import ProfileBanner from "../components/profile/ProfileBanner";

import ProfileNavigationHeader from "../components/profile/ProfileNavigationHeader";

export default function Profile() {
  return (
    <>
      <section className="mt-6">
        <ProfileBanner />
        <div className="px-2 md:px-4 lg:px-6 -mt-8 sm:-mt-12  md:-mt-16 lg:-mt-20 ">
          <ProfileNavigationHeader />
          <FilterAndSort />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 px-0 md:px-2">
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
            <GridItemCard />
            <GridItemCard />
          </div>
        </div>
      </section>
    </>
  );
}
