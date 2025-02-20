import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const {filterTodos,todos } = useSelector((state) => state.todos);
  const filterLength = filterTodos.filter(todo=> todo.status =="Completed")
  const percentage = (filterLength.length / todos.length) * 100;

  return (
    <div className="flex justify-center">
      <div className="w-[50%] bg-zinc-400 mt-4 rounded-full">
        <div
          className={`h-[30px] text-center bg-green-600 text-white ${percentage==100 ?'rounded-full':'rounded-l-full'}`}
          style={{ width: `${todos.length>0 ?percentage:0}%` }}
        >
          {todos.length > 0 ? percentage.toFixed(2) : 0}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
