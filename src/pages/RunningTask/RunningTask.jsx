import useTasks from "../../hooks/useTasks";
import Task from "../Tasks/components/Task";
import Loader from "../shared/Loader";

const RunningTask = () => {
  const {
    data: runningTask,
    isLoading: isLoadingRunningTask,
    isPending: isPendingRunningTask,
  } = useTasks("/completed-tasks");

  return (
    <section id="on-going-tasks">
      <h2 className="text-xl text-center mt-10 pb-5">On Going Tasks</h2>

      {isPendingRunningTask || isLoadingRunningTask ? (
        <Loader />
      ) : runningTask?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {runningTask?.map((task) => (
            <Task key={task?._id} task={task} />
          ))}
        </div>
      ) : (
        "No Task Found"
      )}
    </section>
  );
};

export default RunningTask;
