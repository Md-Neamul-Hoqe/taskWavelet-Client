import { useQuery } from "@tanstack/react-query";
import PatchTaskBanner from "../shared/PatchTaskBanner";
import Loader from "../shared/Loader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ToDo = () => {
  const axios = useAxiosSecure();

  const { data: toDo, isLoading: isLoadingToDo } = useQuery({
    queryKey: ["toDo"],
    queryFn: async () => {
      const res = await axios.get("/to-do-list");

      console.log(res?.data);

      return res?.data;
    },
  });
  return (
    <>
      <PatchTaskBanner newTaskBanner={"/src/assets/task-to-do-banner.jpg"} />
      <section id="to-do-list">{isLoadingToDo ? <Loader /> : toDo?.length}</section>
    </>
  );
};

export default ToDo;
