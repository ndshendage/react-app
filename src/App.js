import React, { Component } from 'react';
import logo1 from './logo.svg';
import './App.css';
import Users from './users/Users';
import Binding from './bindings/Binding';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
