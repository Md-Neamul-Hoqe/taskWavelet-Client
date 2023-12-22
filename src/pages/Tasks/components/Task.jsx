import PropTypes from "prop-types";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const Task = ({ task }) => {
  const axios = useAxiosSecure();

  const handleDeleteTask = () => {
    console.log(task);

    axios.delete(`/remove-task/${task?._id}`).then((res) => {
      if (res?.data?.deletedId) {
        toast(`The task ${task?.title} is deleted.`);
      }
    });
  };
  return (
    <div className={`card bg-neutral text-neutral-content`}>
      <div className="card-body">
        <h2 className="card-title">{task?.title}</h2>
        <p>{task?.description}</p>
        <p>
          Schedule: <strong>{task?.deadline}</strong>
        </p>
        <p>
          Priority: <i>{task?.priority}</i>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Edit</button>
          <button onClick={handleDeleteTask} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
