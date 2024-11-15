import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function Header(): React.ReactNode {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center text-white">
          <span className="text-xl font-semibold">React + Vite + TS</span>
        </Link>

        {user && (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
