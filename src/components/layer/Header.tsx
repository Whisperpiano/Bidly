import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { PiWalletFill } from "react-icons/pi";
import AuthModal from "../modal/AuthModal";
import { useState } from "react";
import AccountDropDown from "../dropdown/AccountDropDown";
import SearchBarMobile from "./SearchBarMobile";
import HamburguerMenu from "./HamburguerMenu";

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  function handleLoginClose() {
    setIsLoginOpen(false);
  }

  function handleLoginOpen() {
    setIsLoginOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-50 px-2 py-4 flex justify-between items-center max-w-screen-2xl mx-auto w-full dark:bg-neutral-950/90 bg-neutral-50/90 backdrop-blur-lg border-b dark:border-neutral-800 border-neutral-200">
        <div className="flex items-center gap-5">
          <Logo />
          <div
            aria-hidden
            className="hidden sm:block w-0.5 bg-neutral-400 dark:bg-neutral-500 h-6"
          ></div>

          <nav className="hidden sm:block">
            <ul className="flex items-center text-base font-semibold gap-2.5">
              <li className="dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-500 hover:text-neutral-600">
                <Link to="/search/listings/all">Explore</Link>
              </li>
              <li className="dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-500 hover:text-neutral-600">
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
        </div>

        <aside className="flex items-center gap-2.5">
          <SearchBar />
          <Button
            type="primary"
            ariaLabel="Connect wallet"
            handleClick={handleLoginOpen}
          >
            <PiWalletFill size={18} />
            Login
          </Button>

          <SearchBarMobile />
          <AccountDropDown />
          <HamburguerMenu />
        </aside>
      </header>

      {/* Modal register login */}
      <AuthModal isOpen={isLoginOpen} onClose={handleLoginClose} />
    </>
  );
}
