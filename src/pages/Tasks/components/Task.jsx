import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index, todos, setTodos }) => {
  const axios = useAxiosSecure();

  // console.log(task, todos);

  const handleDeleteTask = () => {
    // console.log(task);

    axios.delete(`/remove-task/${task?._id}`).then((res) => {
      if (res?.data?.deletedId) {
        toast(`The task ${task?.title} is deleted.`);
      }
    });
  };

  // console.log("Task Id: ", task?._id);

  return (
    <Draggable draggableId={task?._id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div className={`card bg-neutral text-neutral-content`}>
            <div className="card-body">
              
              <h2 className="card-title">{task?.title} <span className="badge badge-outline">{task?.priority}</span></h2>
              <p>{task?.description}</p>
              <p>
                Schedule: <strong>{task?.deadline}</strong>
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/dashboard/update-task/${task?._id}`}
                  className="btn btn-info">
                  Edit
                </Link>
                <button onClick={handleDeleteTask} className="btn btn-warning">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  index: PropTypes.number,
};

export default Task;
