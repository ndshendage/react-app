import React from 'react';
import { Table } from 'reactstrap';
import TableRow from './tableRow'

const TableConstructor = (props) => {
  console.log('columns ',props)
  return(
    <div>
      <Table>
       <thead>
         <tr>
           <th>Serial No</th>
           <th>Task Name</th>
           <th>Status</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {
           props.tasks.map((task, index)=>{
             return(
               <TableRow task={task} key={index} deleteTask={props.deleteTask}/>
             )
           })
         }
       </tbody>
     </Table>
    </div>
  )
}

export default TableConstructor;
