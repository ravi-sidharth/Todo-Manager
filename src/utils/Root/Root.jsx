import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Router/Layout";
import TaskGenerator from "../../Components/TaskGenerator/TaskGeneratorForm";
import TaskCard from "../../Components/TaskCard/TaskCard";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<TaskGenerator />}></Route>
        <Route path="/view-task" element={<TaskCard />}></Route>
      </Route>
    </Routes>
  );
};

export default Root;
