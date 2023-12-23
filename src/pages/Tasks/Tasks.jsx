import ToDo from "../ToDo/ToDo";
import RunningTask from "../RunningTask/RunningTask";
import CompletedTask from "../CompletedTask/CompletedTask";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";
import Loader from "../shared/Loader";
const Tasks = () => {
  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isPending: isPendingTasks,
  } = useTasks("/to-do-list");

  const {
    data: runningTasks,
    isLoading: isLoadingRunningTasks,
    isPending: isPendingRunningTasks,
  } = useTasks("/running-tasks");

  const {
    data: completedTasks,
    isLoading: isLoadingCompletedTasks,
    isPending: isPendingCompletedTasks,
  } = useTasks("/completed-tasks");

  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState([]);
  const [runningTodos, setRunningTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    setTodos(tasks);
  }, [tasks]);

  useEffect(() => {
    setTodos(runningTasks);
  }, [runningTasks]);

  useEffect(() => {
    setTodos(completedTasks);
  }, [completedTasks]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    let add = null,
      active = todos,
      complete = completedTodos;

    if (source.droppableId === "todoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // console.log("Active: ", active, complete);

    if (destination.droppableId === "todoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setTodos(active);
    setCompletedTodos(complete);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {isPendingTasks || isLoadingTasks ? (
        <Loader />
      ) : (
        <ToDo todos={todos} setTodos={setTodos} />
      )}

      {isLoadingRunningTasks || isPendingRunningTasks ? (
        <Loader />
      ) : (
        <RunningTask
          runningTodos={runningTodos}
          setRunningTodos={setRunningTodos}
        />
      )}

      {isLoadingCompletedTasks || isPendingCompletedTasks ? (
        <Loader />
      ) : (
        <CompletedTask
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      )}
    </DragDropContext>
  );
};

export default Tasks;
