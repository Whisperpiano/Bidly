import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
import RankingTable from "../components/table/RankingTable";
import HeroBanner from "../components/home/HeroBanner";
import { useListings } from "../hooks/listings/useListings";

export default function Home() {
  const {
    listings: latestListings,
    isLoading: isLatestListingsLoading,
    // isError: isLatestListingsError,
    // errorMessage: latestListingsErrorMessage,
  } = useListings({
    limit: 10,
    page: 1,
    sort: "created",
    sortOrder: "desc",
  });

  const {
    listings: finishingListings,
    isLoading: isFinishingListingsLoading,
    // isError: isFinishingListingsError,
    // errorMessage: finishingListingsErrorMessage,
  } = useListings({
    limit: 10,
    page: 1,
    sort: "endsAt",
    sortOrder: "asc",
  });

  //todo: hacerlo mejor, pasarselo a los hijos para poner skeletons

  return (
    <>
      <HeroBanner />
      {isLatestListingsLoading ? (
        <div>Loading...</div>
      ) : (
        <ItemsGrid title="Latest items" items={latestListings} />
      )}

      {isFinishingListingsLoading ? (
        <div>Loading...</div>
      ) : (
        <ItemsGrid title="Finishing soon" items={finishingListings} />
      )}

      <RankingTable />
      <SubscribeBanner />
    </>
  );
}
