import { useState } from "react";
import BoardLine from "./components/BoardLine";
import NewTodo from "./components/NewTodo";
import CompletedTodo from "./components/CompletedTodo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center mt-40 relative">
        <div className="w-5/6 h-14  bg-yellow-300 rounded-md z-10 ">
          <BoardLine />
        </div>
        <div className="w-24 h-2/3 bg-yellow-400 absolute bottom-30 left-12 md:left-[5.4rem]">
          <NewTodo />
        </div>
        <div className="w-24 h-2/3 bg-yellow-400 absolute bottom-30 right-12 md:right-[5.4rem]">
          <CompletedTodo />
        </div>
        <div className="absolute top-16 w-[64%] h-full">
          <AddTodo/>
        </div>
      </div>
    </>
  );
}

export default App;
