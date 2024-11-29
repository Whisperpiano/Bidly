import { PiSealCheckFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { AuthGuard } from "../../utils/AuthGuard";
import { useModalStore } from "../../store/modal";
import { Listing } from "../../types/types";

import { useMemo } from "react";
import TimeLeft from "../elements/TimeLeft";

export default function GridItemCard({ item }: { item: Listing }) {
  const { id, title, media, seller, endsAt, bids } = item;
  const isLoggedIn = AuthGuard();
  const handleOpenLogin = useModalStore((state) => state.handleLoginOpen);
  const navigate = useNavigate();

  const price = useMemo(() => {
    const lastBid = bids.length > 0 ? bids[bids.length - 1] : null;
    return lastBid ? lastBid.amount : 0;
  }, [bids]);

  function handleClick(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    if (!isLoggedIn) {
      handleOpenLogin();
    } else {
      navigate(`/profile/${seller.name}`);
    }
  }

  return (
    <Link
      to={`/listing/${title.toLocaleLowerCase().split(" ").join("-")}?id=${id}`}
      aria-label={`View details for the ${title} item`}
    >
      <article className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2">
        <div>
          <img
            src={
              media.length > 0 ? media[0].url : "https://placehold.co/260x160"
            }
            alt={`Image of the ${title}`}
            className="aspect-[16/10] w-full h-full object-cover object-center rounded-lg "
          />
        </div>
        <div className="py-3">
          <h3 className="text-base xs:text-lg font-semibold dark:text-neutral-50 text-neutral-900 truncate">
            {title}
          </h3>

          <span
            className="text-xs xs:text-sm font-semibold dark:text-neutral-400 text-neutral-500 flex items-center gap-1 "
            onClick={handleClick}
          >
            {seller.name}
            <PiSealCheckFill className="text-yellow-400 " />
          </span>
        </div>
        <footer className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-3 grid grid-cols-2 gap-1.5 xs:gap-3">
          <div className="flex flex-col">
            <span className="dark:text-neutral-400 text-neutral-600 font-semibold text-xs xs:text-sm">
              Finishing
            </span>
            <TimeLeft endsAt={endsAt} />
          </div>
          <div className="flex flex-col">
            <span className="dark:text-neutral-400 text-neutral-600 font-semibold text-xs xs:text-sm">
              Last bid
            </span>
            <span className="dark:text-neutral-50 text-neutral-900 font-semibold text-xs xs:text-sm">
              {price} NOFF
            </span>
          </div>
        </footer>
      </article>
    </Link>
  );
}
