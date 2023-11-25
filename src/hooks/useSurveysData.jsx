import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSurveysData = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: surveysData = [] } = useQuery({
    queryKey: ["surveysData"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/surveys`);
      return response.data;
    },
  });
  return [surveysData, refetch];
};

export default useSurveysData;
