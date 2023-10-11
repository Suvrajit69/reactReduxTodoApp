import React from "react";
import { removeBoard } from "../features/board/boardSlice";
import { removeTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import AddTodoInput from "./AddTodoInput";

import { XCircle } from "lucide-react";

function BoardCard() {
  const boards = useSelector((state) => state.boards);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleremoveBoard = (boardId, todoIds) => {
    dispatch(removeBoard({ id: boardId }));
    // console.log(todoIds)
    dispatch(removeTodo({id: todoIds}))
  };

  return (
    <div className="board_layout">
      {Object.values(boards).map((board) => (
        <div key={board?.id} className="prompt_card">
          <button
            onClick={() => handleremoveBoard(board.id, board.todoIds)}
            className="text-red-500 hover:text-red-600"
          >
            <XCircle/>
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
