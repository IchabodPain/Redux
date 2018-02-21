import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, toggle } from '../actions';

class ToDoList extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="todoList">
        {this.props.todoState.todos.map((todo, i) => {
          return <li onClick={this.props.toggle(i)} key={i}>{todo.text}</li>
        })}
      </div>
    )
  }
  // handleClick = (index) => {
  //   console.log('handleclick', index)
  //   this.props.toggle(index);
  // }
}

const mapStateToProps = (state) => {
  return {
      todoState: state
  };
};
export default connect(mapStateToProps, { addTask, toggle })(ToDoList);