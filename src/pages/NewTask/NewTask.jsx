import { useForm } from "react-hook-form";
import PatchTaskBanner from "../shared/PatchTaskBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const NewTask = () => {
  const axios = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);

    const task = { ...data };

    /* TODO: set email */
    // const task = { ...data, email: user?.email };

    try {
      axios.post("/add-task", task).then((res) => {
        if (res?.data?.insertedId) toast("New task added successfully");
      });
    } catch (error) {
      toast("Failed: ", error);
    }
  };

  return (
    <div className="card w-full">
      <PatchTaskBanner newTaskBanner={"/src/assets/Edit-task.jpg"} />
      <h2 className="text-center text-4xl my-9">Add New Task</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Title"
            className="input input-bordered"
            // required
          />
          {errors.title && (
            <p className="text-red-500 text-xs p-2">
              Set a title of your task.
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Priority</span>
          </label>
          <select
            {...register("priority")}
            defaultValue="low"
            className="select select-bordered w-full max-w-xs">
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            {...register("deadline", { required: true })}
            type="datetime-local"
            className="input input-bordered"
            // required
          />
          {errors.deadline && (
            <p className="text-red-500 text-xs p-2">
              Set a deadline to complete this task.
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            {...register("description")}
            placeholder="Description"
            className="textarea textarea-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
