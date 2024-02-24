import './App.css'
import {useRef, useState} from "react";
import TaskItem from "./components/TaskItem"

function App() {
  
  const inputRef = useRef(null);
  const [tasksList, setTasksList] = useState([]);

  let taskKey = 0;

  function handleCreateTask() {
    const taskInput = inputRef.current.value;

    // create new TaskItem then push into tasksList 
    setTasksList([...tasksList, {key:taskKey++, name:taskInput}])
    inputRef.current.value = "";
  }

  return (
    <>
      <div> 
        <input type="input" ref={inputRef} placeholder="task name..." />
        <button onClick={handleCreateTask}> Create </button>
      </div>

      <ul>
       {/* render each taskitem using state */} 
        {tasksList.map(task => (
          <TaskItem key={task.key} taskName={task.name} />
        ))}
      </ul>
    </>
  )
}

export default App
