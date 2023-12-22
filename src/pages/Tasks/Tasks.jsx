import ToDo from "../ToDo/ToDo";
import RunningTask from "../RunningTask/RunningTask";
import CompletedTask from "../CompletedTask/CompletedTask";

const Tasks = () => {
  return (
    <>
      <ToDo />
      <RunningTask />
      <CompletedTask />
    </>
  );
};

export default Tasks;
