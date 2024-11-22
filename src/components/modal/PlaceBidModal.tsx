import { useEffect } from "react";
import { PiXBold } from "react-icons/pi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PlaceBidModal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const test = () => {
    console.log("test");
  };

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950 bg-opacity-75 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="relative p-6 flex overflow-hidden max-w-sm bg-neutral-900 rounded-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <form onClick={test} className="w-full">
          <button
            type="button"
            onClick={onClose}
            className="absolute z-50 top-3 right-3 rounded-full p-2 dark:bg-neutral-800 dark-text-neutral-50 hover:bg-neutral-700"
          >
            <span className="sr-only">Close auth modal</span>
            <PiXBold size={15} />
          </button>
          <h2 className="pb-6 text-lg font-medium dark:text-neutral-50">
            Place a bid
          </h2>
          <p className="pb-3 text-sm dark:text-neutral-50 text-neutral-900 ">
            You are about to place a bid for this item.
          </p>
          <div className="relative pb-6">
            <label htmlFor="bid" className="sr-only">
              Place your bid for this item
            </label>
            <span className="absolute top-3 right-3 text-xs uppercase dark:text-neutral-50 font-normal">
              NOFF
            </span>
            <input
              id="bid"
              name="bid"
              type="text"
              placeholder="Enter your NOFF-tastic offer here!"
              className="pe-12 w-full p-2.5 rounded-lg border outline-none text-sm placeholder:text-xs dark:bg-neutral-800 dark:border-neutral-800 dark:text-neutral-50 dark:focus:border-neutral-500 dark:placeholder:text-neutral-400"
              required
            />
          </div>

          <div className="border rounded-lg p-3 text-xs flex flex-col gap-3 dark:border-neutral-800 border-neutral-100">
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400">Price</span>
              <span className="dark:text-neutral-50">150 NOFF</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400">
                Your coins
              </span>
              <span className="dark:text-green-500">1500 NOFF</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400">
                You pay
              </span>
              <span className="dark:text-red-400">-50 NOFF</span>
            </div>
            <div className="h-0.5 bg-neutral-100 dark:bg-neutral-800"></div>
            <div className="flex items-center justify-between">
              <span className="font-semibold dark:text-neutral-400">
                Your balance
              </span>
              <span className="font-bold dark:text-neutral-50">980 NOFF</span>
            </div>
          </div>

          <span className=" my-3 text-xs dark:text-red-400 flex justify-center">
            Not enough coins!
          </span>

          <button
            type="submit"
            onClick={test}
            className="w-full p-2.5 rounded-lg text-sm font-semibold dark:bg-primary-600 dark:text-neutral-50 dark:hover:bg-primary-700"
          >
            Confirm bid
          </button>
        </form>
      </article>
    </section>
  );
}
