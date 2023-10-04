import { createSlice, nanoid } from "@reduxjs/toolkit";
let nextTodoId = 1;
const initialState = {
  todoId1: {
    id: "todoId1",
    text: "Sample Todo 1",
    completed: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoId = `todo ${nextTodoId}`
      const {text, completed } = action.payload;
      state[newTodoId] = {
        id: nanoid(),
        text,
        completed,
      };
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      if (state[id]) {
        state[id].text = newText;
      }
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      if (state[id]) {
        state[id].completed = !state[id].completed;
      }
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
