import React, { useEffect, useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { addBoard, addTodosInBoard } from "../features/board/boardSlice";
import { useSelector, useDispatch } from "react-redux";
import { flushSync } from "react-dom";

import { SendHorizonal } from "lucide-react";

const AddTodo = () => {
  const [todoNo, setTodoNo] = useState(2);
  const [input, setInput] = useState("");
  const [isComplete, setIsComplete] = useState(false)

  const dispatch = useDispatch();
  const { boards } = useSelector((state) => state.boards);
  const { todos } = useSelector((state) => state.todos);
  

  const addTodoHandler = () => {
    setTodoNo((prev) => prev + 1);
    dispatch(addTodo({ text: input, completed: isComplete }));
    setInput("");
  };

  const addTodoInBoard = () => {
    const todoId = todos.length - 1
    // todos.forEach(todo => {
      console.log(todos[todoId])
      dispatch(addTodosInBoard({ todoNo: `Todo ${todoNo}`, text: input }))
    // });
    
  };
  const call = (e) => {
    e.preventDefault();
    flushSync(()=>{
      addTodoHandler();
      addTodoInBoard();
    })
    // flushSync(()=>{
      // addTodoHandler();
      // addTodoInBoard();
    // })
  };

  return (
    <div className=" w-full h-full flex flex-col items-center">
      <form onSubmit={call} className="flex  w-full  justify-center">
        <input
          type="text"
          className="sm:w-3/4 w-32 h-10 bg-white border-2 border-slate-500 rounded-md p-2 font-serif outline-none "
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <SendHorizonal className="fill-sky-500" />
        </button>
      </form>
      <div className="mt-5 flex justify-center flex-col gap-2">
        {todos.map((todo) => (
          <div className="todo_card" key={todo.id}>
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTodo;
