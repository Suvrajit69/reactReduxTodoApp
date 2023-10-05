// boardSlice.js

import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {},
  reducers: {
    addTodo: (state, action) => {
      const { id,text, completed } = action.payload;
      // const id = nanoid()
      state[id] = {
        id,
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

export const { addTodo, editTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;