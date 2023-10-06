import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "./features/board/boardSlice";

import BoardCard from "./components/BoardCard";

const App = () => {
  const dispatch = useDispatch();

  const [newBoardName, setNewBoardName] = useState("");

  const handleAddBoard = () => {
    const boardId = new Date().getUTCMilliseconds();
    if (newBoardName.trim() !== "") {
      dispatch(addBoard({ name: newBoardName, id: boardId, todoIds: [] }));
      setNewBoardName("");
    }
  };

  return (
    <div className="container mx-auto p-4 w-full h-full">
      <span className="orange_gradient text-center"></span>
      <h1 className="text-2xl font-semibold mb-4">Todo App</h1>

      {/* Add New Board */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter board name"
          className="mr-2 p-2 border rounded"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <button
          onClick={handleAddBoard}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Add Board
        </button>
      </div>
      <BoardCard />
    </div>
  );
};

export default App;
