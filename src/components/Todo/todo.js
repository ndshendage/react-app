import React, {Component} from 'react'
import Task from './task'
import TableConstructor from './tableConstructor'
const uuidv4 = require('uuid/v4');

class Todo extends React.Component {
  inputElement = React.createRef()
  state = {
    tasks: [
      {
        id: uuidv4(),
        name: 'REN-1111',
        status: 'inprogress'
      },
      {
        id: uuidv4(),
        name: 'REN-1112',
        status: 'completed'
      },
      {
        id: uuidv4(),
        name: 'REN-1113',
        status: 'in verify'
      }
    ],
    columns: ['name', 'status'],
    newTask: ''
  }

  changeTask = (event) => {
    console.log('i need to change the task',event.target.value)
    this.setState({newTask: event.target.value})
  }

  deleteTask = (taskId) => {
    console.log('i will delte',taskId)
    let tasks = this.state.tasks;
    let newTaskList = tasks.filter((task) => {
      if(taskId === task.id){
        return false
      }
      return true;
    })

    this.setState({tasks: newTaskList})
    console.log("newTask List",this.state.tasks)
  }

  addTask = (event) => {
    console.log('i need to addd the task',event.target)
    const existingTasks = this.state.tasks
    let newTask = {name: this.state.newTask, status: 'inprogress'}
    const taskList = existingTasks.push(newTask)
    console.log('list of task ',taskList);
    this.setState({tasks: existingTasks})
    this.setState({newTask: ''})
    event.preventDefault();
  }
  render () {
    console.log('received tasks',this.state.tasks)
    return (
      <div>
        <h1> Will add the tasks</h1>
        <form>
          <label>
            Name:
            <input type="text" name="taskName" placeholder='Enter Name of Task' onChange={this.changeTask} value={this.state.newTask}/>
          </label>
          <input type="submit" value="Submit" onClick={this.addTask} />
        </form>
        <h1> Will Get the Tasks</h1>
        {
          this.state.tasks.map((task)=> {
            return (< Task task={task} deleteTask={this.deleteTask}/>)
          })
        }
      </div>
    )
  }
}

export default Todo;
