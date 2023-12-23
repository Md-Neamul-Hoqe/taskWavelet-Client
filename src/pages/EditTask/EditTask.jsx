import { useForm } from "react-hook-form";
import PatchTaskBanner from "../shared/PatchTaskBanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../shared/Loader";

const EditTask = () => {
  const { id } = useParams();
  console.log(id);
  const axios = useAxiosSecure();

  const { data: oldTask, isLoading } = useQuery({
    queryKey: ["edi-task"],
    queryFn: async () => {
      const res = await axios.get(`/task/${id}`);
      return res?.data;
    },
  });

  console.log(oldTask);

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
      axios.put(`/update-task/${id}`, task).then((res) => {
        if (res?.data?.modifiedCount) toast("The task updated successfully");
      });
    } catch (error) {
      toast("Failed: ", error);
    }
  };

  return (
    <div className="card w-full">
      <PatchTaskBanner newTaskBanner={"/src/assets/Edit-task.jpg"} />
      <h2 className="text-center text-4xl my-9">Update Task</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title")}
              defaultValue={oldTask?.title}
              placeholder="Title"
              className="input input-bordered"
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
              defaultValue={oldTask?.priority}
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
              {...register("deadline", {
                required: true,
              })}
              defaultValue={oldTask?.deadline}
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
              defaultValue={oldTask?.description}
              placeholder="Description"
              className="textarea textarea-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditTask;
