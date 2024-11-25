import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
// import Hero from "../components/home/Hero";
import RankingTable from "../components/table/RankingTable";

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      <ItemsGrid />
      <ItemsGrid />
      <RankingTable />
      <SubscribeBanner />
    </>
  );
};

export default Home;
