import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class Logo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        < Users/>
      </div>
    );
  }
}

export default Logo;
