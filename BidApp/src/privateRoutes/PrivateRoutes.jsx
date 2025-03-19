import { Navigate, useLocation } from "react-router-dom";
import useContextHooks from "../useHooks/useContextHooks";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContextHooks();
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoutes;
