import React from 'react'
import { Button} from 'reactstrap';

const Task = (props) => {
  console.log('from task', props.task)
  return(
    <div>
      <h3>Name - {props.task.name} Status -
      {props.task.status} {props.name}
      <Button color="danger" onClick={() => props.deleteTask(props.task.id)}> Remove </Button>
      </h3>
    </div>
  )
}

export default Task;
