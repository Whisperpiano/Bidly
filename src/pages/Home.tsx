import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
import RankingTable from "../components/table/RankingTable";
import HeroBanner from "../components/home/HeroBanner";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <ItemsGrid />
      <ItemsGrid />
      <RankingTable />
      <SubscribeBanner />
    </>
  );
};

export default Home;
