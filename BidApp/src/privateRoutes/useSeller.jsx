import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useHooks/useAxiosSecure";
import useContextHooks from "../useHooks/useContextHooks";

const useSeller = () => {
  const { user, loading } = useContextHooks();
  const axiosSecure = useAxiosSecure();

  const { data: isSeller, isPending: isSellerLoadin } = useQuery({
    queryKey: [user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`user/seller/${user.email}`);
      return res.data?.isSeller;
    },
  });
  return [isSeller, isSellerLoadin];
};

export default useSeller;
