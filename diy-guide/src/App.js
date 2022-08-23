import React from 'react';
import './App.css';
import { useState } from 'react';
import InputBox from './overview';
import TaskList from './taskDetails';

function App() {
  const [taskDetails,setTask]=useState(
    [
      {"name":"task1"},
      {"name":"task2"},
      {"name":"task3"}
    ]
  )

  const addTask=(taskToAdd)=>{
    const newArr = [...taskDetails,taskToAdd]
    setTask(newArr)
  }  
  return (
    <div className="App">
      <InputBox addTask={addTask}></InputBox>
      <button onClick={()=>{
        console.log(taskDetails)
      }}>Show props</button>
      <TaskList tasks={taskDetails}></TaskList>


    </div>
  );
}

export default App;
