import React from "react";
import { useDispatch } from "react-redux";
import {
  priorityWiseTaskFilter,
  statusWiseTaskFilter,
  AllTask,
  
} from "../../Reducers/Reducer";
import { useNavigate } from "react-router-dom";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleTaskFilter = (e) => {
    navigate('/view-task')
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
    <div>
      <select className="outline-none " defaultValue="All" onChange={handleTaskFilter}>
        <option className="bg-gray-500"  value="All">Task Filter</option>
        <option className="bg-gray-500" value="Low">Low Priority Tasks</option>
        <option className="bg-gray-500" value="Medium">Medium Priority Tasks</option>
        <option className="bg-gray-500" value="High">High Priority Tasks</option>
        <option className="bg-gray-500" value="Pending">Pending Tasks</option>
        <option className="bg-gray-500" value="In Progress">In Progress Tasks</option>
        <option className="bg-gray-500" value="Completed">Completed Tasks</option>
      </select>
    </div>
  );
};

export default TaskFilter;
