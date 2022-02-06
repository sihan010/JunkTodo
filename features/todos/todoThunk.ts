import { AppDispatch, RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import FakeTodo from "../../types/FakeTodo";

interface GetTodoArg {
  search: string;
  limit: number;
}

interface ThunkApi {
  dispatch: AppDispatch;
  state: RootState;
}

export const getTodosThunk = createAsyncThunk<
  Array<FakeTodo>, // Return type
  GetTodoArg, // Input Parameter Type
  ThunkApi // ThunkAPI
>("getTodos/all", async (param, thunkApi) => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((result) => {
      return result as Array<FakeTodo>;
    });
});
