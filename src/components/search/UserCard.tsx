import { PiSealCheckFill } from "react-icons/pi";
import { UserProfile } from "../../types/types";
import AuthGuardLink from "../auth/AuthGuardLink";

export default function UserCard({ profile }: { profile: UserProfile }) {
  return (
    <AuthGuardLink to={`/profile/${profile.name}`}>
      <article className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2">
        <header>
          <div className="relative">
            <img
              src={profile.banner.url}
              alt={`Banner of ${profile.name}`}
              className="w-full h-[120px] object-cover object-center rounded-lg"
            />
            <img
              src={profile.avatar.url}
              alt={`Avatar of ${profile.name}`}
              className="aspect-square w-14 object-cover object-center rounded-lg absolute bottom-0 left-2 translate-y-1/2 z-10"
            />
          </div>
        </header>
        <div className="flex items-center justify-between mt-8">
          <div>
            <span className="pl-3 flex items-center gap-1 text-sm font-semibold dark:text-neutral-50 text-neutral-900">
              {profile.name}
              <PiSealCheckFill className="text-yellow-400 " />
            </span>
            <span className="pl-3 flex items-center gap-1 text-sm font-semibold dark:text-neutral-400 text-neutral-500 ">
              {profile.credits} credits
            </span>
          </div>
          <button className="p-2 border rounded-lg text-sm font-medium dark:text-neutral-300 bg-transparent dark:border-neutral-800 ml-auto dark:hover:bg-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-500 text-neutral-800 hover:bg-neutral-200/50 hover:text-neutral-900 truncate ">
            View profile
          </button>
        </div>
      </article>
    </AuthGuardLink>
  );
}
