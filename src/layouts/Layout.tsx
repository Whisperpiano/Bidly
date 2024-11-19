import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/theme";
import { applyThemePreference } from "../utils/applyThemePreference";
import Header from "../components/layer/Header";
import Footer from "../components/layer/Footer";

function Layout() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <>
      <Header />
      <main className="p-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
