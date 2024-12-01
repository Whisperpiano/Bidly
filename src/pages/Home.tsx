import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
import RankingTable from "../components/table/RankingTable";
import HeroBanner from "../components/home/HeroBanner";
import { useListings } from "../hooks/listings/useListings";

export default function Home() {
  const { listings: latestListings, isLoading: isLatestListingsLoading } =
    useListings({
      limit: 10,
      page: 1,
      sort: "created",
      sortOrder: "desc",
    });

  const { listings: finishingListings, isLoading: isFinishingListingsLoading } =
    useListings({
      limit: 10,
      page: 1,
      sort: "endsAt",
      sortOrder: "asc",
    });

  return (
    <>
      <HeroBanner />

      <ItemsGrid
        title="Latest items"
        items={latestListings}
        isLoading={isLatestListingsLoading}
      />

      <ItemsGrid
        title="Finishing soon"
        items={finishingListings}
        isLoading={isFinishingListingsLoading}
      />

      <RankingTable />
      <SubscribeBanner />
    </>
  );
}
