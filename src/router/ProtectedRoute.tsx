import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/user";

interface ProtectedRouteProps {
  element: React.ReactNode;
  redirectTo: string;
}

export const ProtectedRoute = ({
  element,
  redirectTo,
}: ProtectedRouteProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const username = useAuthStore((state) => state.username);

  if (!accessToken || !username) {
    return <Navigate to={redirectTo} replace />;
  }

  return element;
};
