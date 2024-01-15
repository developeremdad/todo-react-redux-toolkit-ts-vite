import { configureStore } from "@reduxjs/toolkit";
import { todosBaseApi } from "./api/api";
import todoReducer from "./features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    [todosBaseApi.reducerPath]: todosBaseApi.reducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(todosBaseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
