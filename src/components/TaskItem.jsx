 function TaskItem({taskName, deleteTask}) {
  return (
    <li>
      <span> {taskName} </span> 
      <button onClick={deleteTask}> delete task </button>
    </li>
  )
}

export default TaskItem;
