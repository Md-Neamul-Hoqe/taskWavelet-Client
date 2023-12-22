import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTasks = (tasks) => {
  const axios = useAxiosSecure();

  //   console.log(tasks);
  const { data, isLoading, isPending } = useQuery({
    queryKey: [`${tasks}`],
    queryFn: async () => {
      const res = await axios.get(`${tasks}`);
      return res?.data;
    },
  });

  return { data, isLoading, isPending };
};

export default useTasks;
