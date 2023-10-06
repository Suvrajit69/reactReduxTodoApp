import React from "react";
import { removeBoard } from "../features/board/boardSlice";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import AddTodoInput from "./AddTodoInput";

function BoardCard() {
  const boards = useSelector((state) => state.boards);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleremoveBoard = (boardId) => {
    dispatch(removeBoard({ id: boardId }));
  };

  return (
    <div className="flex space-x-2 flex-wrap gap-4 h-full">
      {Object.values(boards).map((board) => (
        <div key={board?.id} className="bg-gray-200 p-2 rounded">
          <button
            onClick={() => handleremoveBoard(board.id)}
            className="text-red-500 hover:text-red-600 "
          >
            X
          </button>
          <h2 className="text-lg font-semibold">{board.name}</h2>
          <AddTodoInput boardId={board.id} />

          <ul className="mt-2 flex flex-col gap-2">
            {board?.todoIds?.map((todoId) => {
              const todo = todos[todoId];
              return <TodoList board={board} todo={todo} key={todo?.id} />;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BoardCard;
