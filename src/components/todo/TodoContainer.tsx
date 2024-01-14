import { useAppSelector } from "@/redux/hook";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <div className="flex justify-between">
        <AddTodo />
        <FilterTodo />
      </div>
      <div className="bg-blue-800 p-3 rounded-lg mt-5">
        <div className="border p-1 rounded bg-white space-y-2">
          <div className="bg-green-100 rounded-md border-b">
            <div className="flex justify-between items-center p-3">
              <div>#</div>
              <p>Title</p>
              <div>Priority</div>
              <div>Status</div>
              <p>Description</p>
              <div className="space-x-3">Action</div>
            </div>
          </div>

          {todos?.map((item, index) => (
            <TodoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
