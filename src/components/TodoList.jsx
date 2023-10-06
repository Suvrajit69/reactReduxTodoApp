import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, removeTodo, editTodo } from "../features/todo/todoSlice";
import { removeTodoIdFromBoard } from "../features/board/boardSlice";

import { PenSquare } from "lucide-react";

function TodoList({ board, todo }) {
  // console.log(todo)
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  const handleToggleTodo = (todoId) => {
    dispatch(toggleTodo({ id: todoId }));
  };

  const handleEditTodo = (todoId, todoText) => {
    dispatch(editTodo({ id: todoId, newText: todoText }));
    setNewTodo("");
  };

  const handleremoveTodo = (todoId) => {
    dispatch(removeTodo({ id: todoId }));
    dispatch(removeTodoIdFromBoard({ boardId: board.id, todoId: todoId }));
  };

  return (
    <li
      key={todo?.id}
      className={`flex justify-between p-2 text-base bg-slate-300 rounded-md${
        todo?.completed ? "line-through text-gray-500" : ""
      }`}
    >
      {newTodo ? (
        <div className="flex items-center">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="p-1 rounded-md bg-white"
          />
          <button
            onClick={() => handleEditTodo(todo.id, newTodo)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-1 mt-2 rounded-md ml-2"
          >
            Add New Todo
          </button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo?.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <p>{todo?.text}</p>
          <div className="flex gap-2">
            <PenSquare
              className="h-5 fill-white stroke-blue-500 cursor-pointer"
              onClick={() => setNewTodo(todo.text)}
            />
            <button
              onClick={() => handleremoveTodo(todo.id)}
              className="text-red-500 hover:text-red-600 ml-2"
            >
              X
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoList;
