import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  priorityWiseTaskFilter,
  statusWiseTaskFilter,
  AllTask,
  
} from "../../Reducers/Reducer";

const TaskFilter = () => {
  const {filterTodos,todos} = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  const handleTaskFilter = (e) => {
    if (e.target.value === "All") { 
      dispatch(AllTask(e.target.value))

    } else if (
      e.target.value === "Low" ||
      e.target.value === "Medium" ||
      e.target.value === "High"
    ) {
      dispatch(priorityWiseTaskFilter(e.target.value));
    } else {
      dispatch(statusWiseTaskFilter(e.target.value));
    }
    
  };

  return (
    <div className="">
      <select id="filter"  className="outline-none " defaultValue="All" onChange={handleTaskFilter}>
        <option className="bg-gray-500"  value="All">
          Task Filter
        </option>
        <option className="bg-gray-500" value="Low">Low Priority Task</option>
        <option className="bg-gray-500" value="Medium">Medium Priority Task</option>
        <option className="bg-gray-500" value="High">High Priority Task</option>
        <option className="bg-gray-500" value="Pending">Pending Task</option>
        <option className="bg-gray-500" value="In Progress">In Progress Task</option>
        <option className="bg-gray-500" value="Completed">Completed Tasks</option>
      </select>
    </div>
  );
};

export default TaskFilter;
