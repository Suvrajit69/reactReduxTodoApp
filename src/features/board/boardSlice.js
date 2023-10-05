import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "boards",
  initialState: {},
  reducers: {
    addBoard: (state, action) => {
      const { id, name, todoIds } = action.payload;
      state[id] = {
        id,
        name,
        todoIds,
      };
    },
    editBoard: (state, action) => {
      const { id, newName } = action.payload;
      if (state[id]) {
        state[id].name = newName;
      }
    },
    removeBoard: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },
    addTodoToBoard: (state, action) => {
      const { boardId, todoId } = action.payload;
      
      if (state[boardId]) {
        state[boardId].todoIds.push(todoId);
      }
    },
    removeTodoIdFromBoard: (state, action) => {
      const { boardId, todoId } = action.payload;
      if (state[boardId]) {
        state[boardId].todoIds = state[boardId].todoIds.filter(
          (id) => id !== todoId
        );
      }
    },
  },
});

export const {
  addBoard,
  editBoard,
  removeBoard,
  addTodoToBoard,
  removeTodoIdFromBoard,
} = boardSlice.actions;
export default boardSlice.reducer;
