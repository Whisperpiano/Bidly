import { Bidder } from "../../types/types";
import { PiSealCheckFill } from "react-icons/pi";
import AuthGuardLink from "../auth/AuthGuardLink";

export default function LastBidder({
  bidder,
  isFinished,
}: {
  bidder: Bidder;
  isFinished: boolean;
}) {
  return (
    <AuthGuardLink to={`/profile/${bidder.bidder.name}`}>
      <div className="group flex gap-3 items-center py-3 px-2 rounded-lg dark:hover:bg-neutral-900 hover:bg-neutral-200/50">
        <img
          src={bidder.bidder.avatar.url}
          alt={`Avatar of ${bidder.bidder.name}`}
          className="w-10 aspect-square object-cover object-center rounded-lg"
        />
        <div className="flex flex-col">
          <span className="text-xs dark:text-neutral-400 text-neutral-500 font-semibold">
            {isFinished ? "Winner" : "Last bidder"}
          </span>
          <span className="text-sm dark:text-neutral-50 text-neutral-900 font-semibold flex gap-1 items-center group-hover:underline">
            {bidder.bidder.name}
            <PiSealCheckFill className="text-yellow-400 " />
          </span>
        </div>
      </div>
    </AuthGuardLink>
  );
}
