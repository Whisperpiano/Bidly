import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";

export default function Winner() {
  return (
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
  );
}
