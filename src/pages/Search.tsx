import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Search() {
  const { query } = useParams();

  const activeStyles =
    "block border-b-2 dark:border-neutral-50 border-neutral-950 text-neutral-900 dark:text-neutral-50 py-2 font-semibold m-0";
  const inactiveStyles =
    "block dark:text-neutral-300 dark:hover:text-neutral-100 text-neutral-700 hover:text-neutral-900 py-2 m-0";

  return (
    <>
      <h1 className=" mt-10 mb-6 text-base sm:text-lg font-medium dark:text-neutral-400 text-neutral-600">
        Results for: "{query}"
      </h1>
      <nav className="border-b dark:border-neutral-800 border-neutral-200">
        <ul className="flex items-center gap-6 text-sm md:text-base ">
          <li>
            <NavLink
              to={`/search/listings/${query || "all"}`}
              className={({ isActive }) =>
                isActive ? activeStyles : inactiveStyles
              }
            >
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/search/users/${query || "all"}`}
              className={({ isActive }) =>
                isActive ? activeStyles : inactiveStyles
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/search/collections/${query || "all"}`}
              className="text-neutral-500/90 dark:text-neutral-400/90 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              Collections
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
