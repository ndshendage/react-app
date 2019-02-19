import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const TaskFilter = (props) =>{
return(
  <div>
    <Button color="primary" onClick={props.setFilterType.bind(('all'))}>All</Button>
    <Button color="warning" onClick={() => props.setFilterType('completed')}>Completed</Button>
  <Button color="info" onClick={() => props.setFilterType('inprogress')}>Inprogress</Button>
 </div>
)
}

export default TaskFilter;
