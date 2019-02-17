import React from 'react'

const Task = (props) => {
  console.log('from task', props.task)
  return(
    <div>
      <h3>Name - {props.task.name} Status -
      {props.task.status} {props.name}
      <button onClick={() => props.deleteTask(props.task.id)}> Remove </button>
      </h3>
    </div>
  )
}

export default Task;
