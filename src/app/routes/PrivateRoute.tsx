import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" />;
}
