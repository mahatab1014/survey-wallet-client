import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useUserRole = (email) => {
  const axiosSecure = useAxiosSecure();
  const { refetch: refetchUserRole, data: userRole = [] } = useQuery({
    queryKey: ["userRole", email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/user/${email}`);
      return response.data;
    },
  });
  return [userRole, refetchUserRole];
};

export default useUserRole;
