import { PiSealCheckFill } from "react-icons/pi";
import { ListingBid } from "../../types/types";
import AuthGuardLink from "../auth/AuthGuardLink";

export default function Bidder({ bid }: { bid: ListingBid }) {
  return (
    <AuthGuardLink to={`/profile/${bid.bidder.name}`}>
      <div className="flex items-center justify-between  p-1.5 md:p-3 dark:hover:bg-neutral-900 hover:bg-neutral-200/50 rounded-lg animation-reveal">
        <div className="flex items-center gap-4">
          <img
            src={bid.bidder.avatar.url}
            alt={`Avatar of ${bid.bidder.name}`}
            className="aspect-square w-10 md:w-14 object-cover object-center rounded-lg"
          />
          <span className="font-semibold dark:text-neutral-50 text-neutral-900 flex items-center gap-1 text-ellipsis">
            {bid.bidder.name}
            <PiSealCheckFill className="text-yellow-400" />
          </span>
        </div>
        <div>
          <span className="dark:text-neutral-50 text-neutral-900 font-semibold">
            {bid.amount} NOFF
          </span>
        </div>
      </div>
    </AuthGuardLink>
  );
}
