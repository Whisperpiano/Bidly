import { useState } from "react";
import Badge from "../components/elements/Badge";
import {
  PiSealCheckFill,
  PiShareFatFill,
  PiArrowClockwiseBold,
  PiDotsThreeBold,
} from "react-icons/pi";
import Button from "../components/layer/Button";
// import { useSearchParams } from "react-router-dom";

export default function SingleItem() {
  const [selectedPicture, setSelectedPicture] = useState<string>(
    "https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  function handleChangePicture(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    if (event.currentTarget.src === selectedPicture) return;
    setSelectedPicture(event.currentTarget.src);
  }

  // For the view transitions
  // const [searchParams] = useSearchParams();
  // const img = searchParams.get("img");

  return (
    <>
      <section className="grid grid-cols-3 gap-6 ">
        <div className="col-span-2">
          <article>
            <div>
              <img
                src={selectedPicture}
                alt="alt placeholder"
                className="w-full aspect-video object-cover object-center rounded-lg"
                // style={{ viewTransitionName: `image${img}` }}
              />
            </div>
            <div className="grid grid-cols-5 gap-2 mt-2 animate-reveal">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
                  onClick={handleChangePicture}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?q=80&w=2566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
                  onClick={handleChangePicture}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1511268011861-691ed210aae8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
                  onClick={handleChangePicture}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1480632563560-30f503c09195?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
                  onClick={handleChangePicture}
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1513519683267-4ee6761728ac?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-full aspect-[16/12] object-cover object-center rounded-lg cursor-pointer"
                  onClick={handleChangePicture}
                />
              </div>
            </div>
          </article>
          <article>
            <header className="pt-6">
              <button className="border-b-2 dark:border-neutral-50 py-2">
                Overview
              </button>
              <button
                className="ml-6 py-2 disabled:opacity-75 disabled:pointer-events-none"
                disabled
              >
                Analytics
              </button>
            </header>
            <div className="border-t dark:border-neutral-800 border-neutral-200 px-2">
              <div>
                <h2 className="pt-6 text-base font-semibold dark:text-neutral-50">
                  Description
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus in ex est. Quisque dui turpis, luctus et libero
                  vitae, dignissim convallis neque. Nulla rhoncus ac erat ut
                  faucibus. Integer lorem metus, lacinia non risus nec, mattis
                  egestas quam. Maecenas et rhoncus sem. In molestie mi vel
                  interdum suscipit. Vivamus ullamcorper sagittis dui, vel
                  cursus enim lobortis id. Vestibulum a enim est.
                </p>
              </div>
              <div className="py-6">
                <h2 className="text-base font-semibold dark:text-neutral-50">
                  Bids
                </h2>
                <div className="aspect-[16/4] border dark:border-neutral-800 rounded-lg mt-3 flex items-center justify-center">
                  <p className="text-lg dark:text-neutral-400">
                    No active bids yet. Be the first to make a bid!
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div>
          <article className="animate-reveal border dark:border-neutral-800 border-neutral-200 rounded-lg p-6 sticky top-6">
            <h1 className="text-2xl font-semibold dark:text-neutral-50">
              Title of the item lorem ipsum
            </h1>
            <div className="flex gap-2 items-center pt-2 pb-4">
              <Badge text={"jewelry"} />
              <Badge text={"rings"} />
              <Badge text={"accesory"} />
            </div>
            <div className="grid grid-cols-2 gap-2 py-6 border-y dark:border-neutral-800">
              <div className="flex gap-3 items-center">
                <img
                  src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-10 aspect-square object-cover object-center rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-xs dark:text-neutral-400 font-semibold">
                    Creator
                  </span>
                  <span className="text-sm dark:text-neutral-50 font-semibold flex gap-1 items-center">
                    username
                    <PiSealCheckFill className="text-yellow-400 " />
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="alt placeholder"
                  className="w-10 aspect-square object-cover object-center rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-xs dark:text-neutral-400 font-semibold">
                    Winner
                  </span>
                  <span className="text-sm dark:text-neutral-50 font-semibold flex gap-1 items-center">
                    username
                    <PiSealCheckFill className="text-yellow-400 " />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-6">
              <div className="flex gap-4 items-center">
                <button className="flex gap-1 items-center text-sm dark:text-neutral-400 font-medium">
                  <PiShareFatFill />
                  Share
                </button>
                <button className="flex gap-1 items-center text-sm dark:text-neutral-400 font-medium">
                  <PiArrowClockwiseBold />
                  Refresh
                </button>
              </div>
              <button className="dark:text-neutral-400">
                <span className="sr-only">Options</span>
                <PiDotsThreeBold size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 dark:border-neutral-800">
                <span className="dark:text-neutral-400">Price</span>
                <span>100 NOFF</span>
              </div>
              <div className="flex flex-col gap-1.5 border rounded-lg p-5 dark:bg-neutral-900 dark:border-neutral-800">
                <span className="dark:text-neutral-400">Sale ends</span>
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
              <Button type="tertiary" ariaLabel="Buy now">
                Place a bid
              </Button>
              <Button type="secondary" ariaLabel="Add to cart">
                Update
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
