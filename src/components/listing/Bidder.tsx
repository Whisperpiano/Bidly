import { PiSealCheckFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Bidder() {
  return (
    <Link to={`/profile/username`}>
      <div className="flex items-center justify-between  p-1.5 md:p-3 dark:hover:bg-neutral-900 hover:bg-neutral-200/50 rounded-lg animation-reveal">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder 8"
            className="aspect-square w-10 md:w-14 object-cover object-center rounded-lg"
          />
          <span className="font-semibold dark:text-neutral-50 text-neutral-900 flex items-center gap-1 text-ellipsis">
            username
            <PiSealCheckFill className="text-yellow-400" />
          </span>
        </div>
        <div>
          <span className="dark:text-neutral-50 text-neutral-900 font-semibold">
            100 NOFF
          </span>
        </div>
      </div>
    </Link>
  );
}
