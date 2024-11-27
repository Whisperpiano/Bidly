import { useEffect, useRef, useState } from "react";
import {
  PiGearFill,
  PiGlobeFill,
  PiMoonFill,
  PiSignOutFill,
  PiTagFill,
  PiUserFill,
} from "react-icons/pi";
import { useThemeStore } from "../../store/theme";

export default function HamburguerMenu() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
            <div className="px-3 py-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3 select-none">
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

            <ul className="py-2 border-b border-neutral-200 dark:border-neutral-800 text-sm select-none">
              <li>
                <span className="p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                  <PiUserFill
                    size={16}
                    className="dark:text-neutral-300 text-neutral-700 duration-0"
                  />
                  My profile
                </span>
              </li>
              <li>
                <span className="p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                  <PiTagFill
                    size={16}
                    className="dark:text-neutral-300 text-neutral-700 duration-0"
                  />
                  Create a list
                </span>
              </li>
            </ul>
            <div className="py-2 text-sm border-b border-neutral-200 dark:border-neutral-800">
              <ul className="select-none">
                <li>
                  <span className="p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                    <PiGearFill
                      size={16}
                      className="dark:text-neutral-300 text-neutral-700 duration-0"
                    />
                    Settings
                  </span>
                </li>
                <li>
                  <span className="p-3 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200/50 hover:text-neutral-900 flex items-center gap-1.5">
                    <PiGlobeFill
                      size={16}
                      className="dark:text-neutral-300 text-neutral-700 duration-0"
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
            <div className="py-2 dark:text-red-400 text-red-600 select-none duration-0">
              <span className="p-3 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-200/50 flex items-center gap-1.5 ">
                <PiSignOutFill
                  size={16}
                  className="dark:text-red-400  text-red-600 duration-0"
                />
                Sign out
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
