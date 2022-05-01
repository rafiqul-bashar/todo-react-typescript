import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import uuid from "uuid-random";
export type AddTaskProps = {
  task: string;
};

type FormValues = {
  task: string;
};

const AddTask = ({ task }: AddTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  var todoList = JSON.parse(localStorage.getItem("tasks") || "[]");

  //This is React Hook Form Function . It helps to add the todo in localstorage.
  //Documentaiton :  https://react-hook-form.com/ts . Go to  </>SubmitHandler secttion

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let task = { task: data.task, id: uuid(), isDone: false };
    todoList.push(task);
    localStorage.setItem("tasks", JSON.stringify(todoList));
    window.location.reload();
  };

  return (
    <>
      <h1 className="mx-auto text-gray-700 text-3xl my-8">Add to ToDo List</h1>
      <form
        className="flex justify-between w-full mb-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="flex-1  rounded shadow p-2 text-black mr-2 outline-none focus:bg-[#dddddd]"
          {...register("task", { required: true })}
          placeholder="Example: Do laundry!"
        />
        <br />
        <button type="submit" aria-label="Add todo" className="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:scale-110 transition-all"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </form>
      {errors.task && (
        <p className="w-full py-2 text-center text-black/70 bg-red-300">
          This field cannot be empty!
        </p>
      )}
    </>
  );
};

export default AddTask;
