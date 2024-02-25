import { useRef, useState } from "react";
import TaskItem from "./components/TaskItem"

function App() {

  const inputRef = useRef(null);
  const [tasksList, setTasksList] = useState([]);

  let taskKey = useRef(0);

  function handleCreateTask() {
    const taskInput = inputRef.current.value;

    if (taskInput == "") return;

    // create new TaskItem then push into tasksList 
    setTasksList([...tasksList, { key: taskKey.current++, name: taskInput }])
    inputRef.current.value = "";
  }

  function handleDeleteTask(currentKey) {
    setTasksList(
      tasksList.filter(task => task.key !== currentKey)
    );
  }

  return (
    <div className="flex flex-col gap-[1.2rem] bg-slate-100 justify-center items-center h-[100vh]">
      <div className="flex flex-row gap-[1.2rem]">
        <input type="input" ref={inputRef} placeholder="task name..." className="border-2 shadow-lg" />
        <button className="text-white bg-cyan-600 shadow-lg font-bold px-[1rem] py-[.4rem] rounded-lg" onClick={handleCreateTask}> Create </button>
      </div>

      <ul className="rounded-lg shadow-xl w-[40%] h-[50%] overflow-y-scroll flex flex-col gap-[8px] bg-slate-200 p-[0.25rem]" >
        {/* render each taskitem using state */}
        {tasksList.map(task => (
          <TaskItem key={task.key} deleteTask={() => { handleDeleteTask(task.key) }} taskName={task.name} />
        ))}
      </ul>
    </div>
  )
}

export default App
