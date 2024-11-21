import { PiSealCheckFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function RankedUser() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/profile/username`);
  }
  return (
    <tr className="cursor-pointer group text-base" onClick={handleClick}>
      <th
        scope="row"
        className="px-6 py-4 font-bold whitespace-nowrap dark:text-neutral-400 text-neutral-500 dark:group-hover:bg-neutral-900  group-hover:bg-neutral-100 rounded-tl-lg rounded-bl-lg"
      >
        1
      </th>
      <td className="px-6 py-4 flex items-center gap-4 dark:group-hover:bg-neutral-900 group-hover:bg-neutral-100 ">
        <img
          src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt placeholder"
          className="aspect-square w-14 object-cover object-center rounded-lg"
        />
        <span className="font-semibold dark:text-neutral-50 text-neutral-900 flex items-center gap-1 text-ellipsis">
          username
          <PiSealCheckFill className="text-yellow-400" />
        </span>
      </td>
      <td className="px-6 py-4 text-center dark:group-hover:bg-neutral-900 group-hover:bg-neutral-100  font-semibold dark:text-neutral-50 text-neutral-900">
        12
      </td>
      <td className="px-6 py-4 text-center dark:group-hover:bg-neutral-900 group-hover:bg-neutral-100 rounded-tr-lg rounded-br-lg font-semibold dark:text-neutral-50 text-neutral-900">
        40
      </td>
    </tr>
  );
}
