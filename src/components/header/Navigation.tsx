import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center text-base font-semibold gap-2.5">
        <li className="dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-500 hover:text-neutral-600">
          <Link to="/search/listings/all" aria-label="Explore all listings">
            Explore
          </Link>
        </li>
        <li className="dark:text-neutral-400 dark:hover:text-neutral-300 text-neutral-500 hover:text-neutral-600">
          <Link to="/create" aria-label="Create a new listing">
            Create
          </Link>
        </li>
      </ul>
    </nav>
  );
}
