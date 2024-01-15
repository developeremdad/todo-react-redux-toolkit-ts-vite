import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosBaseApi = createApi({
  reducerPath: "todosBaseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "tasks",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    getSingleTodo: builder.query({
      query: (id) => {
        return {
          url: `task/${id}`,
          method: "GET",
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: "task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    toggleTaskComplete: builder.mutation({
      query: (taskInfo) => {
        return {
          url: `task/${taskInfo.id}`,
          method: "PUT",
          body: taskInfo.data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation({
      query: (id) => {
        return {
          url: `task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetSingleTodoQuery,
  useAddTodoMutation,
  useRemoveTodoMutation,
  useToggleTaskCompleteMutation,
} = todosBaseApi;
