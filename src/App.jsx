import './App.css'
import {useRef, useState} from "react";
import TaskItem from "./components/TaskItem"

function App() {
  
  const inputRef = useRef(null);
  const [tasksList, setTasksList] = useState([]);

  let taskKey = useRef(0);

  function handleCreateTask() {
    const taskInput = inputRef.current.value;

    // create new TaskItem then push into tasksList 
    setTasksList([...tasksList, {key:taskKey.current++, name:taskInput}])
    inputRef.current.value = "";
  }

  function handleDeleteTask(currentKey) {
    setTasksList(
      tasksList.filter(task => task.key !== currentKey)
    );
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
          <TaskItem key={task.key} deleteTask={() => {handleDeleteTask(task.key)}} taskName={task.name + "->" + task.key} />
        ))}
      </ul>
    </>
  )
}

export default App
