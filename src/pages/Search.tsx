import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Search() {
  const { query } = useParams();

  const activeStyles =
    "border-b-2 dark:border-neutral-50 border-neutral-950 py-2 font-semibold";
  const inactiveStyles =
    "dark:text-neutral-300  dark:hover:text-neutral-100 py-2";

  return (
    <>
      <nav className="border-b dark:border-neutral-800 border-neutral-200">
        <ul className="flex items-center gap-6 text-base py-2">
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
              className="opacity-50 cursor-not-allowed"
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
