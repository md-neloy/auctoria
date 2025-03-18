import { Navigate, useLocation } from "react-router-dom";
import useContextHooks from "../useHooks/useContextHooks";
import useAdmin from "./useAdmin";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContextHooks();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname} />;
};

export default AdminRoutes;
