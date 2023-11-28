import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/auth" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
