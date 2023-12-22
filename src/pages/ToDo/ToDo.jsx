import PatchTaskBanner from "../shared/PatchTaskBanner";
import Loader from "../shared/Loader";
import useTasks from "../../hooks/useTasks";
import Task from "../Tasks/components/Task";

const ToDo = () => {
  const {
    data: toDo,
    isLoading: isLoadingToDo,
    isPending: isPendingToDo,
  } = useTasks("/to-do-list");

  return (
    <>
      <PatchTaskBanner newTaskBanner={"/src/assets/task-to-do-banner.jpg"} />
      <section id="to-do-list">
        <h2 className="text-xl text-center mt-10 pb-5">To Do Tasks</h2>

        {isPendingToDo || isLoadingToDo ? (
          <Loader />
        ) : toDo?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toDo?.map((task) => (
              <Task key={task?._id} task={task}/>
            ))}
          </div>
        ) : (
          "No Task Found"
        )}
      </section>
    </>
  );
};

export default ToDo;
