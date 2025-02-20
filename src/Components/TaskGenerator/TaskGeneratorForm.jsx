import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTodo } from "../../Reducers/Reducer";

const TaskGenerator = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const formHandleSubmit = (data) => {
    if (data.title.trim()) {
      data._id = Date.now()
      dispatch(addTodo(data));
      alert("Successfully add the task")
    } else {
      alert("This is invalid syntax, Please try again with valid syntax!");
    }
    reset();
  };

  return (  
    <div className="flex justify-center">
      <form
        className="md:w-96 w-80 mt-4 p-5 bg-indigo-500 text-center rounded-lg shadow-lg"
        onSubmit={handleSubmit(formHandleSubmit)}
      >
        <label
          htmlFor="taskTitle"
          className="block text-lg md:text-xl font-bold text-white"
        >
          Task Title:
        </label>
        <input
          className="mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg w-full"
          type="text"
          id="taskTitle"
          {...register("title", { required: true })}
        />

        <label
          htmlFor="taskDescription"
          className="block text-lg md:text-xl font-bold  text-white"
        >
          Task Description:
        </label>
        <textarea
          className="mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg w-full"
          id="taskDescription"
          {...register("description")}
        ></textarea>

        <label
          htmlFor="priorityLevel"
          className="block text-lg md:text-xl font-bold  text-white"
        >
          Priority Level:
        </label>
        <select
          className="mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg w-full"
          name="level"
          id="priorityLevel"
          defaultValue=""
          {...register("priority", { required: true })}
        >
          <option disabled value="" >
            Choose Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label
          htmlFor="taskDueDate"
          className="block text-lg md:text-xl font-bold  text-white"
        >
          Task Status:
        </label>
        <select
          className="mb-4 px-4 py-2 border-2 border-gray-300 rounded-lg w-full"
          name="level"
          id="priorityLevel"
          defaultValue=""
          {...register("status", { required: true })}
        >
          <option disabled value="">
            Choose Status
          </option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          className="mt-2 p-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-500"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskGenerator;
