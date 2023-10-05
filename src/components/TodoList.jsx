import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todo/todoSlice";
import { removeTodoIdFromBoard } from "../features/board/boardSlice";

function TodoList({ board }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo({ id: todoId }));
  };

  const handleremoveTodo = (todoId) => {
    dispatch(removeTodo({ id: todoId }));
    dispatch(removeTodoIdFromBoard({ boardId: board.id, todoId: todoId }));
  };

  return (
    <div>
      <ul className="mt-2 flex flex-col gap-2">
        {board?.todoIds?.map((todoId) => {
          const todo = todos[todoId];
          return (
            <li
              key={todo?.id}
              className={`flex justify-between p-2 text-base bg-slate-300 rounded-md${
                todo?.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={todo?.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <p>{todo?.text}</p>
              <button
                onClick={() => handleremoveTodo(todo.id)}
                className="text-red-500 hover:text-red-600 ml-2"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
