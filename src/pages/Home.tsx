import { useListings } from "../hooks/listings/useListings";
import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
import RankingTable from "../components/table/RankingTable";
import HeroBanner from "../components/home/HeroBanner";
import { AuthGuard } from "../utils/AuthGuard";
import { sendEmail } from "../api/resend/sendEmail";

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
  console.log(isLogged);

  return (
    <>
      <HeroBanner />
      <button
        onClick={(e) => {
          e.preventDefault();
          sendEmail();
        }}
      >
        Send email
      </button>

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

      {isLogged && <RankingTable />}
      <SubscribeBanner />
    </>
  );
}
