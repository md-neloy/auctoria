import axios from "axios";
import useContextHooks from "./useContextHooks";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5050",
});
const useAxiosSecure = () => {
  const naviate = useNavigate();
  const { signOutUser } = useContextHooks();

  // requrest interceptor too add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    (config) => {
      // sent token with the interceptors request from local storage
      const token = localStorage.getItem("auctoriaToken");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // interceptors for 401 & 403 status
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        await signOutUser();
        naviate("/login");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
