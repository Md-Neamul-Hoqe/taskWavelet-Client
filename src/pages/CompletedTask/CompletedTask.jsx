import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Tasks/components/Task";
import NoTaskFound from "../shared/NoTaskFound";

const CompletedTask = ({ completedTodos, setCompletedTodos }) => {
  // const {
  //   data: completedTasks,
  //   isLoading: isLoadingCompletedTasks,
  //   isPending: isPendingCompletedTasks,
  // } = useTasks("/completed-tasks");

  return (
    <section id="completed-tasks">
      <h2 className="text-xl text-center mt-10 pb-5">Completed Tasks</h2>

      <Droppable droppableId="completed">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {completedTodos?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                {completedTodos?.map((task, index) => (
                  <Task
                    key={task?._id}
                    task={task}
                    index={index}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                ))}
                {provided.placeholder}
              </div>
            ) : (
              <NoTaskFound />
            )}
          </div>
        )}
      </Droppable>
    </section>
  );
};

CompletedTask.propTypes = {
  completedTodos: PropTypes.array,
  setCompletedTodos: PropTypes.func,
};

export default CompletedTask;
