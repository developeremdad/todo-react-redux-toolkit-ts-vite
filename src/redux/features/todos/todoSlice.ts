import { createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<TTodo>) => {
    //   console.log(action.payload);
    //   // state.todos.push(action.payload);   // two way we can set payload.
    //   state.todos.push({ ...action.payload, isCompleted: false });
    // },
    // removeTodo: (state, action: PayloadAction<string>) => {
    //   state.todos = state.todos.filter((item) => item.id !== action.payload);
    // },
    // completedTodo: (state, action: PayloadAction<string>) => {
    //   const todo = state.todos.find((item) => item.id === action.payload);
    //   todo!.isCompleted = !todo?.isCompleted;
    // },
  },
});

// export const { addTodo, removeTodo, completedTodo } = todosSlice.actions;
export default todosSlice.reducer;
