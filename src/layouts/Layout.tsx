import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/theme";
import { applyThemePreference } from "../utils/applyThemePreference";
import Header from "../components/layer/Header";
import Footer from "../components/layer/Footer";
import { Toaster } from "sonner";

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
      <Toaster position="bottom-right" richColors />
      <Footer />
    </>
  );
}

export default Layout;
