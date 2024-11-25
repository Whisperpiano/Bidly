import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../elements/Badge";
import Button from "../layer/Button";
import {
  PiSealCheckFill,
  PiShareFatFill,
  PiArrowClockwiseBold,
  PiDotsThreeBold,
} from "react-icons/pi";
import PlaceBidModal from "../modal/PlaceBidModal";

export default function Sidebar() {
  const [isPlaceBidModalOpen, setIsPlaceBidModalOpen] = useState(false);

  function handlePlaceBidModalOpen() {
    setIsPlaceBidModalOpen(true);
  }
  function handlePlaceBidModalClose() {
    setIsPlaceBidModalOpen(false);
  }
  return (
    <>
      <article className="animate-reveal border dark:border-neutral-800 border-neutral-200  rounded-lg p-6 sticky top-[104px]">
        <h1 className="text-2xl font-semibold dark:text-neutral-50 text-neutral-900">
          Title of the item lorem ipsum
        </h1>
        <div className="flex gap-2 items-center pt-2 pb-4">
          <Badge text={"jewelry"} />
          <Badge text={"rings"} />
          <Badge text={"accesory"} />
        </div>
        <div className="grid grid-cols-2 py-3 border-y dark:border-neutral-800 border-neutral-200">
          <Link to={`/profile/username`} className="group">
            <div className="flex gap-3 items-center py-3 px-2 rounded-lg dark:hover:bg-neutral-900 hover:bg-neutral-200/50">
              <img
                src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="alt placeholder"
                className="w-10 aspect-square object-cover object-center rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xs dark:text-neutral-400 text-neutral-500 font-semibold">
                  Creator
                </span>
                <span className="text-sm dark:text-neutral-50 text-neutral-900 font-semibold flex gap-1 items-center group-hover:underline">
                  username
                  <PiSealCheckFill className="text-yellow-400 " />
                </span>
              </div>
            </div>
          </Link>
          <Link to={`/profile/username`} className="group">
            <div className="flex gap-3 items-center py-3 px-2 rounded-lg dark:hover:bg-neutral-900 hover:bg-neutral-200/50">
              <img
                src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="alt placeholder"
                className="w-10 aspect-square object-cover object-center rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xs dark:text-neutral-400 text-neutral-500 font-semibold">
                  Winner
                </span>
                <span className="text-sm dark:text-neutral-50 text-neutral-900 font-semibold flex gap-1 items-center group-hover:underline">
                  username
                  <PiSealCheckFill className="text-yellow-400 " />
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between py-6">
          <div className="flex gap-4 items-center">
            <button className="flex gap-1 items-center text-sm dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 font-medium">
              <PiShareFatFill />
              Share
            </button>
            <button className="flex gap-1 items-center text-sm dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700 font-medium">
              <PiArrowClockwiseBold />
              Refresh
            </button>
          </div>
          <button className="dark:text-neutral-400 dark:hover:text-neutral-200 text-neutral-500 hover:text-neutral-700">
            <span className="sr-only">Options</span>
            <PiDotsThreeBold size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
          <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200/50">
            <span className="dark:text-neutral-400 text-neutral-600">
              Price
            </span>
            <span>100 NOFF</span>
          </div>
          <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 bg-neutral-100 dark:border-neutral-800 border-neutral-200/50">
            <span className="dark:text-neutral-400 text-neutral-600">
              Sale ends
            </span>
            <time className="flex gap-1 items-center ">
              <div
                className="w-2 h-2 rounded-full bg-green-400"
                aria-hidden
              ></div>
              6d 12h
            </time>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6">
          <Button
            type="primary"
            ariaLabel="Buy now"
            handleClick={handlePlaceBidModalOpen}
          >
            Place a bid
          </Button>
          {/* <Button type="secondary" ariaLabel="Add to cart">
            Update
          </Button> */}
        </div>
      </article>

      {/* Place a bid modal */}
      <PlaceBidModal
        isOpen={isPlaceBidModalOpen}
        onClose={handlePlaceBidModalClose}
      />
    </>
  );
}
