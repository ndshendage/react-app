import React from 'react';
import { Button} from 'reactstrap';

const TableRow = (props) => {
  let {key, task} = props
  console.log("added ",props)
  console.log("added ",task)
  return(
    <tr>
      <td>{props.key}</td>
      <td>{props.task.name}</td>
      <td>{props.task.status}</td>
    <td>
      <Button color="danger" onClick={() => props.deleteTask(props.task.id)}> Remove </Button>
    </td>
    </tr>
  )
}

export default TableRow;
