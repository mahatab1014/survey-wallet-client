import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useUsersData = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch: usersRefetch, data: usersData = [] } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);
      return response.data;
    },
  });
  return [usersData, usersRefetch];
};

export default useUsersData;
