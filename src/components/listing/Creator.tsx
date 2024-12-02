import { PiSealCheckFill } from "react-icons/pi";
import { Media } from "../../types/types";
import AuthGuardLink from "../auth/AuthGuardLink";

interface Seller {
  name: string;
  email: string;
  bio: string | null;
  avatar: Media;
  banner: Media;
}

export default function Creator({ creator }: { creator: Seller }) {
  return (
    <AuthGuardLink to={`/profile/${creator.name}`}>
      <div className=" group flex gap-3 items-center py-3 px-2 rounded-lg dark:hover:bg-neutral-900 hover:bg-neutral-200/50">
        <img
          src={creator.avatar.url}
          alt={`Avatar of ${creator.name}`}
          className="w-10 aspect-square object-cover object-center rounded-lg"
        />
        <div className="flex flex-col">
          <span className="text-xs dark:text-neutral-400 text-neutral-500 font-semibold">
            Creator
          </span>
          <span className="text-sm dark:text-neutral-50 text-neutral-900 font-semibold flex gap-1 items-center group-hover:underline ">
            {creator.name}
            <PiSealCheckFill className="text-yellow-400 " />
          </span>
        </div>
      </div>
    </AuthGuardLink>
  );
}
