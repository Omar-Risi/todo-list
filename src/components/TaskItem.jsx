import { useRef } from "react"

function TaskItem({ taskName, deleteTask }) {

  const task = useRef(null);
  let isTaskDone = false;

  function handleTaskDone() {
    isTaskDone = !isTaskDone;

    if (isTaskDone) {
      task.current.style.color = "#999";
      task.current.style.textDecoration = "line-through"
    }
    else
      task.current.style = {};
  }

  return (
    <li className="w-full h-10 items-center flex flex-row gap-[1rem] bg-slate-100 ">
      <input className="ml-[.25rem] h-6 w-6" type="checkbox" defaultChecked={isTaskDone} onClick={() => handleTaskDone()} />
      <span ref={task} className="flex-1 px-[.25rem] text-lg font-medium" > {taskName} </span>
      <button className="flex text-white bg-sky-500 shadow-lg font-bold px-[1rem] py-[.4rem]" onClick={deleteTask}> delete</button>
    </li>
  )
}

export default TaskItem;
