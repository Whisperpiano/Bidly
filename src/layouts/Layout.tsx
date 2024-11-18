import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <Link to="/" className="text-white mx-2">
          Home
        </Link>
        <Link to="/about" className="text-white mx-2">
          About
        </Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
