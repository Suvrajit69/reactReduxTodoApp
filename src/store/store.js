import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';
import boardReducer from "../features/board/boardSlice"

export const  store = configureStore({
  reducer: {
    boards: boardReducer,
    todos: todoReducer,
  },
});


