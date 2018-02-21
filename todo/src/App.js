import React, { Component } from 'react';
import ToDoForm from './containers/ToDoForm';
import ToDoList from './containers/ToDoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;