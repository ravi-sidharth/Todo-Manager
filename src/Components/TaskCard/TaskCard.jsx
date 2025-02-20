import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editingTodo,
  deleteTodo,
  statusTodo,
} from "../../Reducers/Reducer";

const TaskCard = () => {
  const { filterTodos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let [currentPage, setCurrentPage] = useState(1);
  const [taskStatus, setTaskStatus] = useState(""); 
  const totalTodos = filterTodos.length;
  const noOfPages = Math.ceil(totalTodos / 5);
  const start = (currentPage - 1) * 5;
  const end = start + 5;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleTaskStatus = (e) => {
    setTaskStatus(e.target.value);
  };

  const handleEditTask = (todo,index) => {
    let flag = true;
    const newTitle = prompt("Enter new title:", todo.title);
    const newDescription = prompt(
      "Enter new description:",
      todo.description
    );
    let newPriority = prompt(
      "Enter new priority level:",
      todo.priority
    );
    while (flag){
      if (
        newPriority === "Low" ||
        newPriority === "Medium" ||
        newPriority === "High"
      ) {
        dispatch(
          editingTodo({
            _id: Date.now(),
            editingIndex: index,
            newTitle,
            newDescription,
            newPriority,
          })
        );
        flag = false
      } else {
        alert("Your priority level should be Easy, Medium or High, Please try again!")
        newPriority = prompt(
          "Enter new priority level:",
          todo.priority
        );
      }
    }
  }

  return (
    <>
      <div className="text-black text-center">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPreviousPage()}
          className={`px-1 border-2 m-1 cursor-pointer ${
            currentPage === 1 ? "opacity-30" : ""
          }`}
        >
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <button
              className={`px-2 border-2 m-1 cursor-pointer ${
                currentPage == n + 1 ? `bg-yellow-300` : ""
              }`}
              onClick={() => handlePageChange(n + 1)}
              key={n}
            >
              {n + 1}
            </button>
          );
        })}
        <button
          disabled={currentPage === noOfPages}
          onClick={() => goToNextPage()}
          className={`px-1 border-2 m-1 cursor-pointer ${
            currentPage == noOfPages ||  noOfPages ===0? "opacity-30" : ""
          }`}
        >
          ➡️
        </button>
      </div>

      <div className="flex gap-5 m-10">
        {filterTodos && filterTodos.length > 0 ? (
            filterTodos.slice(start, end).map((todo, index) => (
            <div key={todo._id}>
              <ul>
                <li>
                  <span className="font-bold">Task Title:</span> {todo.title}
                </li>
                <li>
                  <span className="font-bold">Task Description:</span>
                  {todo.description}
                </li>
                <li>
                  <span className="font-bold">Priority Level:</span>
                  {todo.priority}
                </li>
                <li>
                  <span className="font-bold">Task Status:</span> {todo.status}
                </li>
              </ul>
              <button
                className="text-white p-1 bg-yellow-700 rounded-lg mr-2"
                onClick={() => {
                  handleEditTask(todo,index)
                }}
              >
                Edit
              </button>
              <button
                className="text-white p-1 bg-red-700 rounded-lg"
                onClick={() => dispatch(deleteTodo(todo._id))}
              >
                Delete
              </button>
              <button className= {`text-black mx-2 p-1 bg-green-700 rounded-lg ${todo.status=== "Pending"?"bg-yellow-200" :""}  ${todo.status=== "In Progress"?"bg-yellow-500" :""}` }>
                <select
                  defaultValue={todo.status}
                  onChange={handleTaskStatus}
                  onClick={() =>
                    dispatch(statusTodo({ id: todo._id, taskStatus }))
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </button>
            </div>
          ))
        ) : (
          <p className="text-2xl font-bold">No tasks found!.....</p>
        )}
      </div>
    </>
  );
};

export default TaskCard;
