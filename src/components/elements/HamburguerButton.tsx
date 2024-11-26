interface HamburgerButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerButton({
  isOpen,
  setIsOpen,
}: HamburgerButtonProps) {
  return (
    <button
      className={`relative rounded-lg text-sm flex items-center gap-2 h-[36px] sm:h-[42px] aspect-square justify-center border  ${
        isOpen
          ? "dark:text-neutral-300 dark:border-neutral-500 dark:bg-neutral-900 bg-neutral-200 text-neutral-700 border-neutral-200 font-semibold"
          : "dark:bg-neutral-950 dark:text-neutral-400 dark:border-neutral-800 text-neutral-600 border-neutral-200/50 bg-neutral-200/50 "
      }`}
      aria-label="Account"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="block absolute top-1/2 left-[9px] ">
        <span
          className={`block absolute h-0.5 w-4 dark:bg-neutral-300 bg-neutral-900  transform transition duration-200 ease-in-out ${
            isOpen ? "rotate-45 " : "-translate-y-1.5 "
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 w-2.5 dark:bg-neutral-300 bg-neutral-900  transform transition duration-200 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block absolute h-0.5 w-4 dark:bg-neutral-300 bg-neutral-900  transform transition duration-200 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
}
