import { UserProfile } from "../../types/types";
import RankedUserSkeleton from "../skeletons/RankingUserSkeleton";
import RankedUser from "./RankedUser";

export default function TableContent({
  profiles,
  isLoading,
}: {
  profiles: UserProfile[];
  isLoading: boolean;
}) {
  return (
    <>
      <thead className="text-xs font-semibold  uppercase border-b dark:border-neutral-800 border-neutral-200">
        <tr>
          <th
            scope="col"
            className="hidden sm:block px-6 py-6 dark:text-neutral-400 text-neutral-500 duration-0"
          >
            #
          </th>
          <th
            scope="col"
            className="px-2 xs:px-6 py-6 w-full dark:text-neutral-400 text-neutral-500 duration-0"
          >
            User
          </th>
          <th
            scope="col"
            className="px-2 xs:px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
          >
            Credits
          </th>
          <th
            scope="col"
            className="px-2 xs:px-6 py-6 text-center dark:text-neutral-400 text-neutral-500 duration-0"
          >
            Items
          </th>
        </tr>
      </thead>
      <tbody className={isLoading ? "animate-pulse" : ""}>
        {isLoading
          ? Array.from({ length: 5 }, (_, index) => (
              <RankedUserSkeleton key={index} />
            ))
          : profiles.map((profile, index) => (
              <RankedUser key={index} profile={profile} />
            ))}
      </tbody>
    </>
  );
}
