import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiMagnifyingGlassBold } from "react-icons/pi";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/search/listings/${query.toLocaleLowerCase()}`);
    setQuery("");
    inputRef.current?.blur();
  }

  return (
    <form name="search" className="group" onSubmit={handleSubmit}>
      <label htmlFor="searchbar" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <PiMagnifyingGlassBold
            className="size-5 text-neutral-500 group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-300"
            aria-hidden="true"
          />
        </div>
        <input
          type="search"
          id="searchbar"
          className="min-w-[400px] block w-full p-2.5 ps-10 text-sm rounded-lg outline-none bg-neutral-100 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 placeholder-neutral-500 dark:placeholder-neutral-400 text-neutral-900 dark:text-neutral-50 focus:border-neutral-400 dark:focus:border-neutral-500 focus:bg-neutral-200 dark:focus:bg-neutral-900 hover:bg-neutral-200 hover:border-neutral-200 dark:hover:bg-neutral-900 dark:hover:border-neutral-500 "
          placeholder="Search for items or users"
          value={query}
          onChange={handleChange}
          ref={inputRef}
          required
        />
      </div>
    </form>
  );
}
