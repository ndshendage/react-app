import React, { Component } from 'react'
import Task from './task'
import TaskFilter from './taskFilter'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
        status: 'completed'
      }
    ],
    columns: ['name', 'status'],
    newTask: '',
    taskStatus: '',
    filterType: 'all'
  }

  changeTask = (event) => {
    console.log('i need to change the task',event.target.value)
    this.setState({newTask: event.target.value})
  }

  changeTaskStatus = (event) => {
    console.log('i need to change the task',event.target.value)
    this.setState({taskStatus: event.target.value})
  }

  setFilterType = (filterType) =>{
    this.setState({filterType: filterType})
  }

  filteredTasks = () => {
    let tasks = this.state.tasks;
    let newTaskList = tasks.filter((task) => {
      if(this.state.filterType === 'inprogress'){
        if(task.status === 'inprogress'){
          return true
        }
        return false;
      }
      if(this.state.filterType === 'completed'){
        if(task.status === 'completed'){
          return true
        }
        return false;
      }
      return true;
    })
    return newTaskList
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
    let newTask = {name: this.state.newTask, status: this.state.taskStatus}
    const taskList = existingTasks.push(newTask)
    console.log('list of task ',taskList);
    this.setState({tasks: existingTasks})
    this.setState({newTask: ''})
    this.setState({taskStatus: ''})
    event.preventDefault();
  }
  render () {
    console.log('received tasks',this.state.tasks)
    console.log('filtered tasks',this.filteredTasks())
    return (
      <div>
        {/* <form>
          <label>
            Name:
            <input type="text" name="taskName" placeholder='Enter Name of Task' onChange={this.changeTask} value={this.state.newTask}/>
          </label>
          <label>
            <select id='status' onChange={this.changeTaskStatus}>
              <option value="">Select Status</option>
              <option value="inprogress">Inprogress</option>
              <option value="completed">Comepleted</option>
            </select>

          </label>

        <Button onClick={this.addTask}>Create Task</Button>
        </form> */}
        <Form>
          <FormGroup><h1>Create New Task</h1></FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Name of Task</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.changeTask} value={this.state.newTask} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Status</Label>
          <Input type="select" name="select" id='status' onChange={this.changeTaskStatus}>
              <option value="">Select Status</option>
              <option value="inprogress">Inprogress</option>
              <option value="completed">Comepleted</option>
          </Input>
        </FormGroup>
        <Button color="success" onClick={this.addTask}>Create Task</Button>
      </Form>
        <br/>
        <Form>
          <FormGroup>
            <TaskFilter setFilterType={this.setFilterType}/>
          </FormGroup>
        </Form>
        <h1> Will Get the Tasks</h1>
        {
          this.filteredTasks().map((task, index)=> {
            return (< Task key={index} task={task} deleteTask={this.deleteTask}/>)
          })
        }
      </div>
    )
  }
}

export default Todo;
