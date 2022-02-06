import { getTodosThunk } from "./todoThunk";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FakeTodo from "../../types/FakeTodo";

interface TodosState {
  todos: FakeTodo[];
  loading: boolean;
  message: string;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  message: "Initial Value",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<FakeTodo>) => {
      state.todos.push(action.payload);
    },
    removeTodoById: (state, action: PayloadAction<number>) => {
      let mutatedTodos = state.todos.filter(
        (item) => item.id !== action.payload
      );
      state.todos = mutatedTodos;
    },
    markCompletedById: (state, action: PayloadAction<number>) => {
      state.todos.forEach((item) => {
        if (item.id === action.payload) item.completed = true;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosThunk.pending, (state, {}) => {
      state.loading = true;
      state.message = "Request Started";
    });
    builder.addCase(getTodosThunk.rejected, (state, {}) => {
      state.loading = false;
      state.message = "Request Failed";
    });
    builder.addCase(getTodosThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos = payload.slice(0, 20);
      state.message = "Request Succeeded";
    });
  },
});

export const { addNewTodo, removeTodoById, markCompletedById } =
  todosSlice.actions;
export default todosSlice.reducer;
