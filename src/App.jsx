import './App.css'
import React, { useState } from "react"
import Header from './Components/Header/Header'
import TaskGeneratorForm from './Components/TaskGenerator/TaskGeneratorForm'
import ProgressBar from './Components/ProgressBar/ProgressBar'
import TaskCard from './Components/TaskCard/TaskCard'
import TaskFilter from './Components/TaskFilter/TaskFilter'
import Root from './utils/Root/Root'
function App() {
  return (
    
    <div className='h-screen'>
      {/* <Header/>
      <ProgressBar/>
      <TaskGeneratorForm/>
      <TaskFilter/>
      <TaskCard/> */}
      <Root/>
    </div>
  )
}

export default App
