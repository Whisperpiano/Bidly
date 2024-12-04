import { useState, useEffect, useRef } from "react";
import { PiMagnifyingGlassBold, PiXBold } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBarMobile() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearchOpen() {
    setIsSearchOpen(true);
    inputRef.current?.focus();
  }

  function handleSearchClose() {
    setIsSearchOpen(false);
    inputRef.current?.blur();
  }

  const isUserSearch = location.pathname.startsWith("/search/users");
  const isListingSearch = location.pathname.startsWith("/search/listings");

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isUserSearch) {
      navigate(`/search/users/${query.toLocaleLowerCase()}`);
    } else if (isListingSearch) {
      navigate(`/search/listings/${query.toLocaleLowerCase()}`);
    } else {
      navigate(`/search/listings/${query.toLocaleLowerCase()}`);
    }
    setQuery("");
    handleSearchClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    function handlePressEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleSearchClose();
      }
    }
    document.addEventListener("keydown", handlePressEscape);
    return () => {
      document.removeEventListener("keydown", handlePressEscape);
    };
  }, []);

  return (
    <>
      <div
        className={`flex transition-all duration-300 fixed left-0 dark:bg-neutral-950 bg-neutral-50 px-2 h-[86px] sm:h-[95px] top-0 py-4 w-full z-[60]  ${
          isSearchOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="flex w-full items-center gap-3 justify-between">
          <form
            name="search-mobile"
            className="group w-full"
            onSubmit={handleSearchSubmit}
          >
            <label htmlFor="searchbar-mobile" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <PiMagnifyingGlassBold
                  className="size-5 text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-300 duration-0"
                  aria-hidden="true"
                />
              </div>
              <input
                type="search"
                id="searchbar-mobile"
                className="block w-full p-2.5 ps-10 text-sm rounded-lg outline-none bg-neutral-200/50 dark:bg-transparent border border-neutral-200/50 dark:border-neutral-800 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-50 focus:border-neutral-400 dark:focus:border-neutral-500 focus:bg-neutral-50 dark:focus:bg-neutral-900 hover:bg-neutral-50 hover:border-neutral-300 dark:hover:bg-neutral-900 dark:hover:border-neutral-500 "
                placeholder="Search for items or users"
                value={query}
                onChange={handleChange}
                ref={inputRef}
                required
              />
            </div>
          </form>
          <button
            type="button"
            onClick={handleSearchClose}
            className="rounded-full p-2 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 bg-neutral-200/50 text-neutral-900 hover:bg-neutral-200"
          >
            <span className="sr-only">Close searchbar</span>
            <PiXBold size={15} />
          </button>
        </div>
      </div>

      <button
        className={`lg:hidden rounded-lg text-sm flex items-center gap-2  h-[36px] sm:h-[42px] aspect-square justify-center border  ${
          isSearchOpen
            ? "dark:text-neutral-300 dark:border-neutral-500 dark:bg-neutral-900 bg-neutral-200 text-neutral-700 border-neutral-200 font-semibold"
            : "dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50 "
        }`}
        onClick={handleSearchOpen}
      >
        <span className="sr-only">Search</span>
        <PiMagnifyingGlassBold
          size={18}
          className="dark:text-neutral-300 text-neutral-900 duration-0"
        />
      </button>
    </>
  );
}
