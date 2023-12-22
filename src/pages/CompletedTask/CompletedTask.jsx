import useTasks from "../../hooks/useTasks";
import Task from "../Tasks/components/Task";
import Loader from "../shared/Loader";

const CompletedTask = () => {
  const {
    data: completedTasks,
    isLoading: isLoadingCompletedTasks,
    isPending: isPendingCompletedTasks,
  } = useTasks("/completed-tasks");

  return (
    <section id="completed-tasks">
      <h2 className="text-xl text-center mt-10 pb-5">Completed Tasks</h2>
      {isPendingCompletedTasks || isLoadingCompletedTasks ? (
        <Loader />
      ) : completedTasks?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedTasks?.map((task) => (
            <Task key={task?._id} task={task}/>
          ))}
        </div>
      ) : (
        "No Task Found"
      )}
    </section>
  );
};

export default CompletedTask;
