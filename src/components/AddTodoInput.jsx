import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { addTodoToBoard } from "../features/board/boardSlice";

function AddTodoInput({boardId}) {
  const [newTodoText, setNewTodoText] = useState("");

  const dispatch = useDispatch();


  const handleAddTodo = (boardId, e) => {
    e.preventDefault();
    const newId = new Date().getUTCMilliseconds();
    if (newTodoText.trim() !== "") {
      const newTodo = {
        id: newId,
        text: newTodoText,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setNewTodoText("");

      // Attach the new todo to the selected board
      dispatch(addTodoToBoard({ boardId, todoId: newTodo.id }));
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="p-1 rounded-md w-full bg-slate-100"
        value={newTodoText}
        placeholder="Write your todos"
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button
        onClick={(e) => handleAddTodo(boardId, e)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-1 text-xs rounded-md ml-2"
        type="submit"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodoInput;
