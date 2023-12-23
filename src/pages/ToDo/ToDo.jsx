import PropTypes from "prop-types";
import PatchTaskBanner from "../shared/PatchTaskBanner";
import Task from "../Tasks/components/Task";
import { Droppable } from "react-beautiful-dnd";
import NoTaskFound from "../shared/NoTaskFound";

const ToDo = ({ todos, setTodos }) => {
  // console.log(todos);

  return (
    <>
      <PatchTaskBanner newTaskBanner={"/src/assets/task-to-do-banner.jpg"} />
      <section id="to-do-list">
        <h2 className="text-xl text-center mt-10 pb-5">To Do Tasks</h2>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                  {todos?.map((task, index) => (
                    <Task
                      key={task?._id}
                      task={task}
                      index={index}
                      todos={todos}
                      setTodos={setTodos}
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
    </>
  );
};

ToDo.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default ToDo;
