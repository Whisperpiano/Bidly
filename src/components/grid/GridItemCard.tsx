import { PiSealCheckFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

export default function GridItemCard() {
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    navigate(`/profile/username`);
  }

  return (
    <Link to="/listing/culo-name-test?id=1">
      <article className="border dark:border-neutral-800 border-neutral-200 rounded-lg p-2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1514207994142-98522b5a2b23?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="alt placeholder"
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
        <div className="py-3">
          <h3 className="text-base xs:text-lg font-semibold dark:text-neutral-50 text-neutral-900">
            Title lorem ipsum
          </h3>

          <span
            className="text-xs xs:text-sm font-semibold dark:text-neutral-400 text-neutral-500 flex items-center gap-1"
            onClick={handleClick}
          >
            username
            <PiSealCheckFill className="text-yellow-400 " />
          </span>
        </div>
        <footer className="dark:bg-neutral-900 bg-neutral-100 rounded-lg p-3 grid grid-cols-2 gap-1.5 xs:gap-3">
          <div className="flex flex-col">
            <span className="dark:text-neutral-400 text-neutral-600 font-semibold text-xs xs:text-sm">
              Finishing
            </span>
            <time className="flex gap-1 items-center dark:text-neutral-50 text-neutral-900 font-semibold text-xs xs:text-sm">
              <div
                className="w-2 h-2 rounded-full bg-green-400"
                aria-hidden
              ></div>
              6d 12h
            </time>
          </div>
          <div className="flex flex-col">
            <span className="dark:text-neutral-400 text-neutral-600 font-semibold text-xs xs:text-sm">
              Last bid
            </span>
            <span className="dark:text-neutral-50 text-neutral-900 font-semibold text-xs xs:text-sm">
              50 NOFF
            </span>
          </div>
        </footer>
      </article>
    </Link>
  );
}
