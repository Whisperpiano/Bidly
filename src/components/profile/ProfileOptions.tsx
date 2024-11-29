import { useEffect, useRef, useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { useAuthStore } from "../../store/user";
import { useNavigate } from "react-router-dom";

export default function ProfileOptions() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const logout = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleChangeAvatar() {
    console.log("click edit avatar");
  }

  function handleChangeBanner() {
    console.log("click edit banner");
  }

  function handleLogout() {
    setIsOpen(false);
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      logout();
      navigate("/");
    }
  }

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          className={`flex items-center justify-center rounded-lg aspect-square w-[36px] sm:w-[42px] border dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 dark:hover:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-900 text-neutral-600 border-neutral-100 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-700 hover:border-neutral-200 ${
            isOpen ? "dark:border-neutral-500 border-neutral-200" : ""
          }`}
          onClick={handleClick}
        >
          <span className="sr-only">Profile options</span>
          <PiDotsThreeBold
            size={20}
            className={`transition-transform duration-200 dark:text-neutral-400 text-neutral-600 ${
              isOpen ? "rotate-90" : ""
            }`}
          />

          <div
            className={`absolute top-[50px] right-0 z-20  text-left divide-y rounded-lg shadow w-44 dark:bg-neutral-900 bg-neutral-50 dark:divide-neutral-700/50 divide-neutral-200  transition-all duration-200 ${
              isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="py-2 text-sm dark:text-neutral-300">
              <li onClick={handleChangeAvatar}>
                <span className="block px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900 ">
                  Edit avatar
                </span>
              </li>
              <li onClick={handleChangeBanner}>
                <span className="block px-4 py-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 hover:bg-neutral-200/50 hover:text-neutral-900">
                  Edit banner
                </span>
              </li>
            </ul>
            <div className="py-2 dark:text-red-400 text-red-600 ">
              <span
                className="block px-4 py-2 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-200/50   "
                onClick={handleLogout}
              >
                Sign out
              </span>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
