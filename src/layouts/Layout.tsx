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
      <main className="max-w-screen-2xl w-full mx-auto px-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
