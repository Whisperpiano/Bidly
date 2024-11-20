import ItemsGrid from "../components/grid/ItemsGrid";
import Hero from "../components/home/Hero";
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
    </>
  );
};

export default Home;
