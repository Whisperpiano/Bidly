import Logo from "../logo/Logo";
import SearchBar from "../header/SearchBar";
import AuthModal from "../modal/AuthModal";
import SearchBarMobile from "../header/SearchBarMobile";
import HamburguerMenu from "../header/HamburguerMenu";
import Separator from "../elements/Separator";
import Navigation from "../header/Navigation";
import WalletBtn from "../header/WalletBtn";
import UserMenu from "../header/UserMenu";
import { useModalStore } from "../../store/modal";

export default function Header() {
  const isLoginOpen = useModalStore((state) => state.isLoginOpen);
  const handleLoginOpen = useModalStore((state) => state.handleLoginOpen);
  const handleLoginClose = useModalStore((state) => state.handleLoginClose);
  return (
    <>
      <header className="sticky top-0 z-50 px-2 py-4 flex justify-between items-center max-w-screen-2xl mx-auto w-full dark:bg-neutral-950/90 bg-neutral-50/90 backdrop-blur-lg border-b dark:border-neutral-800 border-neutral-200">
        <div className="flex items-center gap-5">
          <Logo />
          <Separator />
          <Navigation handleLoginOpen={handleLoginOpen} />
        </div>

        <aside className="flex items-center gap-2.5">
          {/* Desktop */}
          <SearchBar />
          <WalletBtn onLoginOpen={handleLoginOpen} />
          <UserMenu onLoginOpen={handleLoginOpen} />
          {/* Mobile */}
          <SearchBarMobile />
          <HamburguerMenu onLoginOpen={handleLoginOpen} />
        </aside>
      </header>

      {/* Modal for register / login */}
      <AuthModal isOpen={isLoginOpen} onClose={handleLoginClose} />
    </>
  );
}
