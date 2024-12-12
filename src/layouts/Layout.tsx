import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/themeStore";
import { applyThemePreference } from "../utils/applyThemePreference";
import Header from "../components/layer/Header";
import Footer from "../components/layer/Footer";
import { Toaster } from "sonner";
import ConfirmLogout from "../components/modal/ConfirmLogout";
import { useModalStore } from "../store/modalStore";

function Layout() {
  const theme = useThemeStore((state) => state.theme);
  const isConfirmLogoutOpen = useModalStore(
    (state) => state.isConfirmLogoutOpen
  );
  const handleConfirmLogoutClose = useModalStore(
    (state) => state.handleConfirmLogoutClose
  );

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
      <ConfirmLogout
        isOpen={isConfirmLogoutOpen}
        onClose={handleConfirmLogoutClose}
      />
      <Footer />
    </>
  );
}

export default Layout;
