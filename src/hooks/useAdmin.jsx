import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data?.role;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
