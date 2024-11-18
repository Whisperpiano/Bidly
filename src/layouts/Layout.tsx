import { Link, Outlet } from "react-router-dom";
import { useTestStore } from "../store/test";
import { useState } from "react";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // no necesariamente aqui, porque es global ya
  // se puede acceder desde cualquier componente
  const test = useTestStore((state) => state.tests);
  console.log(test);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={darkMode ? "dark" : ""} id="layout">
      <nav className="bg-primary-800 p-4">
        <Link to="/" className="text-white mx-2">
          Home
        </Link>
        <Link to="/about" className="text-white mx-2">
          About
        </Link>
        <button
          className="text-white mx-2"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          Toggle theme
        </button>
      </nav>
      <main className="p-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen">
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
