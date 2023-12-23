import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Tasks/components/Task";
import NoTaskFound from "../shared/NoTaskFound";

const RunningTask = ({ runningTodos, setRunningTodos }) => {
  return (
    <section id="on-going-tasks">
      <h2 className="text-xl text-center mt-10 pb-5">On Going Tasks</h2>

      <Droppable droppableId="running-tasks">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {runningTodos?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                {runningTodos?.map((task, index) => (
                  <Task
                    key={task?._id}
                    task={task}
                    index={index}
                    todos={runningTodos}
                    setTodos={setRunningTodos}
                  />
                ))}
                {provided.placeholder}
              </div>
            ) : (
              <NoTaskFound/>
            )}
          </div>
        )}
      </Droppable>
    </section>
  );
};

RunningTask.propTypes = {
  runningTodos: PropTypes.array,
  setRunningTodos: PropTypes.func,
};

export default RunningTask;
