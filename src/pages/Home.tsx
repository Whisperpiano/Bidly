import { useThemeStore } from "../store/theme";

const Home = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div>
      <h1>Home</h1>
      <button
        className="text-white mx-2"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Home;
