import { PiArrowLeftBold } from "react-icons/pi";
import BigLogo from "../../logo/BigLogo";

export default function RegisterHeader({
  handleViewChange,
}: {
  handleViewChange: (view: "login" | "register") => void;
}) {
  return (
    <>
      <button
        type="button"
        className="absolute z-50 top-3 left-3 rounded-full p-2 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-700 bg-neutral-200/50 text-neutral-900 hover:bg-neutral-200"
        onClick={() => handleViewChange("login")}
      >
        <span className="sr-only">Close auth modal</span>
        <PiArrowLeftBold size={15} />
      </button>
      <div className="flex items-center justify-center translate-x-2 py-6">
        <BigLogo />
      </div>
      <h2 className="pb-3 text-center text-xl font-semibold dark:text-neutral-50 text-neutral-900">
        Register account
      </h2>
    </>
  );
}
