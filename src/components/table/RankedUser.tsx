import { PiSealCheckFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../types/types";
import { formatNumber } from "../../utils/formatNumber";

export default function RankedUser({ profile }: { profile: UserProfile }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/profile/${profile.name}`);
  }
  return (
    <tr
      className="cursor-pointer group text-sm md:text-base"
      onClick={handleClick}
    >
      <th
        scope="row"
        className="hidden sm:table-cell px-2 sm:px-6 py-3 xs:py-4 font-bold whitespace-nowrap dark:text-neutral-400 text-neutral-500 dark:group-hover:bg-neutral-900 group-hover:bg-neutral-200/50 rounded-tl-lg rounded-bl-lg"
      >
        {profile.position}
      </th>
      <td className="px-2 xs:px-6 py-3 xs:py-4 flex items-center gap-4 dark:group-hover:bg-neutral-900 group-hover:bg-neutral-200/50 ">
        <img
          src={profile.avatar.url || "https://placehold.co/56x56"}
          alt={`Avatar of ${profile.name}`}
          className="aspect-square w-14 object-cover object-center rounded-lg"
        />
        <span className="font-semibold dark:text-neutral-50 text-neutral-900 flex items-center gap-1 text-ellipsis">
          {profile.name}
          <PiSealCheckFill className="text-yellow-400" />
        </span>
      </td>
      <td className="px-2 sm:px-6 py-3 xs:py-4 text-center dark:group-hover:bg-neutral-900 group-hover:bg-neutral-200/50  font-semibold dark:text-neutral-50 text-neutral-900">
        {formatNumber(profile.credits)}
      </td>
      <td className="px-2 sm:px-6 py-3 xs:py-4 text-center dark:group-hover:bg-neutral-900 group-hover:bg-neutral-200/50 rounded-tr-lg rounded-br-lg font-semibold dark:text-neutral-50 text-neutral-900">
        {profile._count.listings}
      </td>
    </tr>
  );
}
