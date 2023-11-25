import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useComments = (id) => {
  const axiosSecure = useAxiosSecure();

  const { refetch: commentsRefetch, data: commentsData = [] } = useQuery({
    queryKey: ["commentsData"],
    queryFn: async () => {
      const response = await axiosSecure(`/survey-comments/${id}`);
      return response.data;
    },
  });
  return [commentsData, commentsRefetch];
};

export default useComments;
