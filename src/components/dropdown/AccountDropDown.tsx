import {
  PiTagFill,
  PiGearFill,
  PiGlobeFill,
  PiMoonFill,
  PiSignOutFill,
  PiUserFill,
} from "react-icons/pi";
import { useThemeStore } from "../../store/theme";
import { useRef, useState } from "react";

export default function AccountDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
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

  console.log(isOpen);
  return (
    <div className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          className={`rounded-lg text-sm flex items-center gap-2 h-[42px] aspect-square justify-center border  ${
            isOpen
              ? "dark:text-neutral-300 dark:border-neutral-500 dark:bg-neutral-900 bg-neutral-200 text-neutral-700 border-neutral-200 font-semibold"
              : "dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50 "
          }`}
          aria-label="Account"
        >
          <PiUserFill size={18} />
        </button>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute w-44 top-14 right-0 z-10 text-left divide-y  rounded-lg shadow dark:bg-neutral-900 dark:divide-neutral-700/50 bg-neutral-50 divide-neutral-200 transition-all duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-3 flex items-center gap-3 select-none">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="alt placeholder"
              className="aspect-square w-10 object-cover object-center rounded-lg"
            />
          </div>
          <div className="text-sm">
            <p className="dark:text-neutral-400 text-neutral-600">
              Welcome back,
            </p>
            <span className="dark:text-neutral-50 text-neutral-900 font-medium">
              username!
            </span>
          </div>
        </div>

        <ul className="py-2 text-sm dark:text-neutral-300 text-neutral-900 select-none">
          <li>
            <span className="px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
              <PiUserFill size={16} />
              My profile
            </span>
          </li>
          <li>
            <span className="px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
              <PiTagFill size={16} />
              Create a list
            </span>
          </li>
        </ul>
        <div className="py-2 text-sm dark:text-neutral-300 text-neutral-900">
          <ul className="select-none">
            <li>
              <span className="px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                <PiGearFill size={16} />
                Settings
              </span>
            </li>
            <li>
              <span className="px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                <PiGlobeFill size={16} />
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
                  <PiMoonFill size={16} />
                  <span className="text-sm">Dark mode</span>
                </div>
                <div className="relative w-9 h-5  peer-focus:outline-none rounded-full peer bg-neutral-400 dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-50 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-50 after:border-neutral-50 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"></div>
              </label>
            </li>
          </ul>
        </div>
        <div className="py-2 dark:text-red-400 select-none">
          <span className="px-4 py-2 text-sm dark:hover:bg-neutral-800 flex items-center gap-1.5">
            <PiSignOutFill size={16} />
            Sign out
          </span>
        </div>
      </div>
    </div>
  );
}
