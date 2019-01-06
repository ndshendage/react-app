import React, { Component } from 'react';
import logo1 from './logo.svg';
import './App.css';
import Users from './users/Users';
import Binding from './bindings/Binding';
import Parent from './components/childParent/Parent';

class App extends Component {
  state = {
    btnName: 'From Child',
    title: 'Parent To Child Data Transfer'
  }

  changeBtnNameTitle = (title) => {
    console.log('will change changeBtnNameTitle');
    this.setState({
      btnName: 'Changed To Parent',
      title: title
    })
  }

  render() {
    return (
      <div className="App">
        < Users/>
        {
          // 2 way binding .. This is the comment
        }
        <br/>
        <h3> Understand Binding</h3>
        <Binding/>

        {
          // understanding the data transfer from parent to child
        }
        <br />
        <h3>{this.state.title}</h3>
        <Parent btnName={this.state.btnName} changeBtnNameTitle={this.changeBtnNameTitle.bind(this, 'From Child To Parent')}/>
      </div>
    );
  }
}

export default App;
