import { createSlice, nanoid } from "@reduxjs/toolkit";
let boardId = 1;
const initialState = {
  boardId1: {
    id: 'boardId1',
    name: 'Board 1',
    todoIds: [],
  },
};

const boardSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newBoardId = `board ${boardId}`
      const { todoIds } = action.payload;
      state[newBoardId] = {
        id: nanoid(),
        name: newBoardId,
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
    addTodoInBoard: (state, action) => {
      const { boardId, todoId } = action.payload;
      if (state[boardId]) {
        state[boardId].todoIds.push(todoId);
      }
    },
  },
});
export const { addBoard, addTodosInBoard, removeBoard } = boardSlice.actions;

export default boardSlice.reducer;
