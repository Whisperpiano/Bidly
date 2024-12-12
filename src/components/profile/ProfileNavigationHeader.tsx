import { Dispatch, SetStateAction } from "react";
import { ProfileButton } from "../../pages/Profile";

export default function ProfileNavigationHeader({
  selectedButton,
  setSelectedButton,
  winsNumber,
  itemsNumber,
}: {
  selectedButton: ProfileButton;
  setSelectedButton: Dispatch<SetStateAction<ProfileButton>>;
  winsNumber: number;
  itemsNumber: number;
}) {
  return (
    <header className="text-sm md:text-base">
      <button
        className={`py-2 ${
          selectedButton === "items"
            ? "border-b-2 dark:text-neutral-50 text-neutral-900 dark:border-neutral-50 border-neutral-950  font-semibold duration-0"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300"
        }`}
        onClick={() => setSelectedButton("items")}
      >
        Items{" "}
        <span className="font-normal dark:text-neutral-400 text-neutral-500">
          ({itemsNumber})
        </span>
      </button>
      <button
        className={`ml-6 py-2 ${
          selectedButton === "wins"
            ? "border-b-2 dark:text-neutral-50 text-neutral-900 dark:border-neutral-50 border-neutral-950  font-semibold"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300"
        }`}
        onClick={() => setSelectedButton("wins")}
        disabled={winsNumber === 0}
      >
        Wins{" "}
        <span className="font-normal dark:text-neutral-400 text-neutral-500">
          ({winsNumber})
        </span>
      </button>
      <button
        className="ml-6 py-2 disabled:text-[#8f8f8f] dark:disabled:text-[#868686] disabled:pointer-events-none "
        disabled
      >
        About
      </button>
      <button
        className="ml-6 py-2 disabled:text-[#8f8f8f] dark:disabled:text-[#868686] disabled:pointer-events-none "
        disabled
      >
        Activity
      </button>
    </header>
  );
}
