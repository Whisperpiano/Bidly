import {
  PiTagFill,
  PiGearFill,
  PiGlobeFill,
  PiMoonFill,
  PiSignOutFill,
  PiUserFill,
  PiUserPlusFill,
} from "react-icons/pi";
import { useThemeStore } from "../../store/theme";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthGuard } from "../../utils/AuthGuard";
import { useAuthStore } from "../../store/user";
import { scrollToTop } from "../../utils/ScrollTop";
import { toast } from "sonner";

export default function UserMenu({ onLoginOpen }: { onLoginOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);
  const timeoutRef = useRef<number | null>(null);
  const isLoggedIn = AuthGuard();
  const logout = useAuthStore((state) => state.clearAuth);
  const userName = useAuthStore((state) => state.profile?.name);
  const userPicture = useAuthStore((state) => state.profile?.avatar.url);
  const navigate = useNavigate();

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsOpen(false);
    const confirm = window.confirm("Are you sure you want to logout?");
    if (confirm) {
      logout();
      navigate("/");
      scrollToTop();
      toast.info("You have been logged out successfully!");
    }
  };

  return (
    <div className="relative lg:block hidden ">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          className={`rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border  ${
            isOpen
              ? "dark:text-neutral-300 dark:border-neutral-500 dark:bg-neutral-900 bg-neutral-200 text-neutral-700 border-neutral-200 font-semibold"
              : "dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50 "
          }`}
          aria-label="Account"
        >
          <PiUserFill
            size={18}
            className="dark:text-neutral-300 text-neutral-900 duration-0"
          />
        </button>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute w-44 top-14 right-0 z-10 text-left divide-y rounded-lg shadow dark:bg-neutral-900 dark:divide-neutral-700/50 bg-neutral-50 divide-neutral-200 transition-all duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isLoggedIn ? (
          <div
            className="p-3 flex items-center gap-3 select-none"
            onClick={handleClick}
          >
            <>
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
            </>
          </div>
        ) : (
          <div className="py-2">
            <span
              className="px-4 py-2 text-sm dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5 cursor-pointer"
              onClick={onLoginOpen}
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
          <ul className="py-2 text-sm select-none">
            <li>
              <Link
                to={`/profile/${userName}`}
                aria-label="My profile"
                onClick={handleClick}
              >
                <span className="px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
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
                <span className="px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                  <PiTagFill
                    size={16}
                    className="dark:text-neutral-300 text-neutral-700 duration-0"
                  />
                  Create a list
                </span>
              </Link>
            </li>
          </ul>
        )}

        <div className="py-2 text-sm ">
          <ul className="select-none">
            <li className="cursor-normal">
              <span className="px-4 py-2 text-neutral-700 dark:text-neutral-400 flex items-center gap-1.5 opacity-75">
                <PiGearFill
                  size={16}
                  className="text-neutral-700 dark:text-neutral-400 duration-0 opacity-75"
                />
                Settings
              </span>
            </li>
            <li className="cursor-normal">
              <span className="px-4 py-2 text-neutral-700 dark:text-neutral-400 flex items-center gap-1.5 opacity-75">
                <PiGlobeFill
                  size={16}
                  className="text-neutral-700 dark:text-neutral-400 duration-0 opacity-75"
                />
                Language
              </span>
            </li>
            <li>
              <label className="inline-flex w-full items-center justify-between cursor-pointer px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900">
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
              className="px-4 py-2 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-200/50 flex items-center gap-1.5 "
              onClick={handleLogout}
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
  );
}
