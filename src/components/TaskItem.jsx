 function TaskItem({taskName}) {
  return (
    <li>
      <span> {taskName} </span> 
      <button> delete task </button>
    </li>
  )
}

export default TaskItem;
