import React, { Component } from 'react';
import DummyComponent from "./DummyComponent";
import TrancheData from "./mockdata/trancheData";
import ToDoApp from "./demoApp/ToDoApp";
import SignupDialog from "./demoApp/SignupDialog";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DummyComponent data={TrancheData} />
        <ToDoApp />
        <SignupDialog />
      </div>
    );
  }
}

export default App;
