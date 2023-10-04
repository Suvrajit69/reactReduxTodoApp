import React, { useState } from "react";
import { Trash, PlusSquare } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeBoard, addBoard } from "../features/board/boardSlice";

const BoardLine = () => {
  const [boardNo, setBoardNo] = useState(2)

  const { boards } = useSelector((state) => state.boards);
  const { todos } = useSelector((state) => state.todos);
// console.log(todos)
  const dispatch = useDispatch();

  const addBoardHandler = () => {
    setBoardNo(prev=> prev + 1)
    dispatch(addBoard({boardNo:`board${boardNo}`}));
  };

  const removeBoardHandler = (e)=>{
    dispatch(removeBoard(e))
  }

  return (
    <div className="w-full h-full flex items-center px-2 gap-1 justify-end">
      {boards.map((board) => (
        <div
          className=" border-yellow-700 border-4 p-2 rounded-md bg-red-400 flex items-center gap-2"
          key={board.id}
        >
          <button>{board.boardNo}</button>
          <button onClick={() => removeBoardHandler(board.id)}>
            <Trash className="fill-red-600 outline-none" />
          </button>
        </div>
      ))}
      <div>
        <button
          className="flex items-center border-4 p-2 rounded-sm border-sky-700"
          onClick={addBoardHandler}
        >
          Add board
          <PlusSquare />
        </button>
      </div>
    </div>
  );
};

export default BoardLine;
