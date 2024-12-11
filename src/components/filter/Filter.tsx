import { useEffect, useRef, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";

interface FilterProps {
  options: string[];
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Filter({
  options,
  selected,
  setSelected,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (index: number) => {
    setSelected(options[index]);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelected(options[0]);
  }, [options, setSelected]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative z-30" ref={filterRef}>
        <button
          className={`flex gap-2  items-center text-xs sm:text-sm font-medium p-3 rounded-lg dark:text-neutral-300 dark:hover:bg-neutral-800 ${
            isOpen
              ? "dark:bg-neutral-800 bg-neutral-200"
              : "dark:bg-neutral-900 bg-neutral-200/50 "
          }`}
          onClick={handleOpenClick}
        >
          <span className="sr-only">Sort items</span>
          <span className="dark:text-neutral-200 text-neutral-700">
            {selected}
          </span>
          <PiCaretDownBold
            className={`transition-transform duration-200 dark:text-neutral-200 text-neutral-700 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <span className="sr-only">Options to sort</span>

        <div
          className={` absolute top-[50px] left-0 z-10  text-left divide-y rounded-lg shadow w-44 dark:bg-neutral-900 dark:divide-neutral-700/50 bg-neutral-50 divide-neutral-200/50  transition-all duration-200 ${
            isOpen ? "opacity-100  " : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="py-2 text-xs sm:text-sm dark:text-neutral-300 text-neutral-700">
            {options.map((option, index) => (
              <li
                key={index}
                className="block px-4 py-2 dark:hover:bg-neutral-800 hover:bg-neutral-200/50 cursor-pointer"
                onClick={() => handleSelection(index)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
