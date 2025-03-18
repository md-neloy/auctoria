import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useContextHooks = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useContextHooks;
