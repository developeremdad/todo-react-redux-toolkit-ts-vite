import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todos/todoSlice";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isError) {
    return <p>Something want wrong.</p>;
  }

  if (isLoading) {
    return <p className="text-center">Loading. . . </p>;
  }

  return (
    <div>
      <div className="flex justify-between">
        <AddTodo />
        <FilterTodo priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-blue-800 p-3 rounded-lg mt-5">
        <div className="border p-1 rounded bg-white space-y-2">
          <div className="bg-green-100 rounded-md border-b">
            <div className="flex justify-between items-center text-start py-1 px-3">
              <div className="me-2">#</div>
              <p className="flex-1">Title</p>
              <div className="flex-1">Priority</div>
              <div className="flex-1">Status</div>
              <p className="flex-[2]">Description</p>
              <div className="space-x-3">Action</div>
            </div>
          </div>

          {todos.data?.map((item: TTodo, index: number) => (
            <TodoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
