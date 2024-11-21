import SubscribeBanner from "../components/home/SubscribeBanner";
import ItemsGrid from "../components/grid/ItemsGrid";
import Hero from "../components/home/Hero";
import RankingTable from "../components/table/RankingTable";
import { useThemeStore } from "../store/theme";

const Home = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <Hero />
      <button
        className=" mx-2"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        Toggle theme
      </button>
      <ItemsGrid />
      <ItemsGrid />
      <RankingTable />
      <SubscribeBanner />
    </>
  );
};

export default Home;
