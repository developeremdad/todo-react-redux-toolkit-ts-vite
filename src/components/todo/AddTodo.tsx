import { addTodo } from "@/redux/features/todos/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const id = Math.random().toString(32).substring(2, 10);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id,
        title,
        description,
      })
    );
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add new todo</DialogTitle>
              <DialogDescription>
                Fill the form for add new todo.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  placeholder="Enter title"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  placeholder="Enter description"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodo;
