import { useEffect, useRef, useState } from "react";
import {
  PiGearFill,
  PiGlobeFill,
  PiMoonFill,
  PiSignOutFill,
  PiTagFill,
  PiUserFill,
  PiUserPlusFill,
} from "react-icons/pi";
import { useThemeStore } from "../../store/theme";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/user";
import { AuthGuard } from "../../utils/AuthGuard";
import { scrollToTop } from "../../utils/ScrollTop";
import { toast } from "sonner";

export default function HamburguerMenu({
  onLoginOpen,
}: {
  onLoginOpen: () => void;
}) {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [isOpen, setIsOpen] = useState(false);
  const logout = useAuthStore((state) => state.clearAuth);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isLoggedIn = AuthGuard();
  const userName = useAuthStore((state) => state.profile?.name);
  const userPicture = useAuthStore((state) => state.profile?.avatar.url);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    setIsOpen(false);
    onLoginOpen();
  };

  const handleLogoutClick = () => {
    setIsOpen(false);
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      logout();
      navigate("/");
      scrollToTop();
      toast.info("You have been logged out successfully!");
    }
  };

  return (
    <>
      <button
        className={`lg:hidden flex relative rounded-lg text-sm  items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border ${
          isOpen
            ? "dark:text-neutral-300 dark:border-neutral-500 dark:bg-neutral-900 bg-neutral-200 text-neutral-700 border-neutral-200 font-semibold"
            : "dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50"
        }`}
        aria-label="Account"
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
      >
        <div className="block absolute top-1/2 left-[9px] sm:left-[12px]">
          <span
            className={`block absolute h-0.5 w-4 dark:bg-neutral-300 bg-neutral-900 transform transition duration-200 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-2.5 dark:bg-neutral-300 bg-neutral-900 transform transition duration-200 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-4 dark:bg-neutral-300 bg-neutral-900 transform transition duration-200 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>

      <section>
        <div
          className={`fixed top-[87px] sm:top-[96px] left-0 w-full h-screen bg-neutral-950/25  backdrop-blur-sm transition-all duration-800 overflow-hidden ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex flex-col bg-neutral-50  dark:bg-neutral-900 h-screen max-w-[300px] ml-auto transition-all duration-800 ${
              isOpen ? "translate-x-0" : "translate-x-[200px]"
            }`}
            ref={menuRef}
          >
            {isLoggedIn ? (
              <div className="px-3 py-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 select-none">
                <div>
                  <img
                    src={userPicture}
                    alt={`Profile picture of ${userName}`}
                    className="aspect-square w-10 object-cover object-center rounded-lg"
                  />
                </div>
                <div className="text-sm">
                  <p className="dark:text-neutral-400 text-neutral-600">
                    Welcome back,
                  </p>
                  <span className="dark:text-neutral-50 text-neutral-900 font-medium">
                    {userName}!
                  </span>
                </div>
              </div>
            ) : (
              <div className="py-2 border-b border-neutral-200 dark:border-neutral-800 duration-0 cursor-pointer">
                <span
                  className="p-3 text-sm dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5"
                  onClick={handleLoginClick}
                >
                  <PiUserPlusFill
                    size={16}
                    className="dark:text-neutral-300 text-neutral-700 duration-0"
                  />
                  Login/Register
                </span>
              </div>
            )}

            {isLoggedIn && (
              <ul className="py-2 border-b border-neutral-200 dark:border-neutral-800 text-sm select-none">
                <li>
                  <Link
                    to={`/profile/${userName}`}
                    aria-label="My profile"
                    onClick={handleClick}
                  >
                    <span className="p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                      <PiUserFill
                        size={16}
                        className="dark:text-neutral-300 text-neutral-700 duration-0"
                      />
                      My profile
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/create`}
                    aria-label="Create a list"
                    onClick={handleClick}
                  >
                    <span className="p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                      <PiTagFill
                        size={16}
                        className="dark:text-neutral-300 text-neutral-700 duration-0"
                      />
                      Create a listing
                    </span>
                  </Link>
                </li>
              </ul>
            )}

            <div className="py-2 text-sm border-b border-neutral-200 dark:border-neutral-800">
              <ul className="select-none">
                <li className="cursor-normal">
                  <span className="p-3 text-neutral-700 dark:text-neutral-400 flex items-center gap-1.5 opacity-75">
                    <PiGearFill
                      size={16}
                      className="text-neutral-700 dark:text-neutral-400 duration-0 opacity-75"
                    />
                    Settings
                  </span>
                </li>
                <li className="cursor-normal">
                  <span className="p-3 text-neutral-700 dark:text-neutral-400 flex items-center gap-1.5 opacity-75">
                    <PiGlobeFill
                      size={16}
                      className="text-neutral-700 dark:text-neutral-400 duration-0 opacity-75"
                    />
                    Language
                  </span>
                </li>
                <li>
                  <label className="inline-flex w-full items-center justify-between cursor-pointer p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={theme === "dark"}
                      onChange={() => toggleTheme()}
                    />
                    <div className="flex items-center gap-1.5">
                      <PiMoonFill
                        size={16}
                        className="dark:text-neutral-300 text-neutral-700 duration-0"
                      />
                      <span className="text-sm dark:text-neutral-300 text-neutral-900">
                        Dark mode
                      </span>
                    </div>
                    <div className="relative w-9 h-5  peer-focus:outline-none rounded-full peer bg-neutral-400 dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-50 after:border-neutral-50 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"></div>
                  </label>
                </li>
              </ul>
            </div>
            {isLoggedIn && (
              <div className="py-2 dark:text-red-400 text-red-600 select-none duration-0 cursor-pointer">
                <span
                  className="p-3 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-200/50 flex items-center gap-1.5 "
                  onClick={handleLogoutClick}
                >
                  <PiSignOutFill
                    size={16}
                    className="dark:text-red-400  text-red-600 duration-0"
                  />
                  Sign out
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
