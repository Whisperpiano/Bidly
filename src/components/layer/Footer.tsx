import { useThemeStore } from "../../store/theme";

export default function Footer() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <footer className="bg-primary-800 p-4 text-white">
      <p>This is the footer</p>
      <button
        className="text-white mx-2"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        Toggle theme
      </button>
    </footer>
  );
}
