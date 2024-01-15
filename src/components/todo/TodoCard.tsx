import {
  useRemoveTodoMutation,
  useToggleTaskCompleteMutation,
} from "@/redux/api/api";
import { TTodo } from "@/redux/features/todos/todoSlice";
import { useState } from "react";
import { Button } from "../ui/button";
import EditTodo from "./EditTodo";

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TTodo) => {
  const [editId, setEditId] = useState("");
  const [toggleTaskComplete, { isLoading }] = useToggleTaskCompleteMutation();
  const [removeTodo] = useRemoveTodoMutation();

  if (isLoading) {
    <p className="text-center">Loading . . . </p>;
  }

  // Handle update todo completion status
  const handleTaskCompletedToggle = (id: string) => {
    const taskInfo = {
      id,
      data: { title, description, priority, isCompleted: !isCompleted },
    };
    toggleTaskComplete(taskInfo);
  };

  // Handle delete todo list
  const handleDeleteTodo = (id: string) => {
    removeTodo(id);
  };
  return (
    <div>
      <div className="w-full h-full rounded-xl">
        <div className="bg-white rounded-md flex justify-between text-start items-center border p-3">
          <input
            onChange={() => handleTaskCompletedToggle(_id as string)}
            className="me-3"
            type="checkbox"
            name="complete"
            id="complete"
          />
          <p className="flex-1 capitalize-first">{title}</p>
          <div className="capitalize flex-1 flex items-center">
            <div
              className={`size-2 rounded-full mr-2 ${
                priority == "hight" && "bg-red-500"
              } ${priority == "medium" && "bg-yellow-500"} ${
                priority == "low" && "bg-green-500"
              }`}
            ></div>
            {priority}
          </div>
          <div className="flex-1">
            {isCompleted ? (
              <p className="text-green-500">Done</p>
            ) : (
              <p className="text-red-500">Pending</p>
            )}
          </div>
          <p className="flex-[2] capitalize-first">{description}</p>
          <div className="space-x-3 flex">
            <Button
              onClick={() => handleDeleteTodo(_id as string)}
              className="bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Button>
            <div onClick={() => setEditId(_id)}>
              <EditTodo editId={editId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
