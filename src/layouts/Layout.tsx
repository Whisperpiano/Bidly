import { Link, Outlet } from "react-router-dom";
import { useTestStore } from "../store/test";

function Layout() {
  // no necesariamente aqui, porque es global ya
  // se puede acceder desde cualquier componente
  const test = useTestStore((state) => state.tests);
  console.log(test);
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
