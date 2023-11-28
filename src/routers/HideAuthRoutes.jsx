import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ReactPreloader from "../components/PreLoader/ReactPreloader";

const HideAuthRoutes = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <ReactPreloader />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace></Navigate>;
  }

  return children;
};

export default HideAuthRoutes;
