import { useListings } from "../hooks/listings/useListings";
import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
import RankingTable from "../components/table/RankingTable";
import HeroBanner from "../components/home/HeroBanner";
import { AuthGuard } from "../utils/AuthGuard";

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

  const isLogged = AuthGuard();

  return (
    <>
      <HeroBanner />

      <ItemsGrid
        title="Latest listings"
        items={latestListings}
        isLoading={isLatestListingsLoading}
      />

      <ItemsGrid
        title="Finishing soon"
        items={finishingListings}
        isLoading={isFinishingListingsLoading}
      />

      {isLogged && <RankingTable />}
      <SubscribeBanner />
    </>
  );
}
