import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';


class ToDoForm extends React.Component {
  state = {
    inputValue: '',
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            placeholder="Type Task Here" 
            value={this.state.inputValue} 
            onChange={this.handleChange}/>
          <button type="submit">Add ToDo</button>
        </form>
      </div>
    )
  }
  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.inputValue);
    this.setState({inputValue: ''});
  }
}

const mapStateToProps = (state) => {
  return {
    todoState: state
  };
};

export default connect(mapStateToProps, { addTask })(ToDoForm);
  

  // function ToDoForm (props) {
  //   console.log(props)
  //   return (
  //     <div>
  //       <form onSubmit={(event) => {
  //         event.preventDefault();
  //         props.addTask('test');
  //         console.log(props);
  //       }}>
  //         <input type="text" name="text" placeholder="Type Task Here"/>
  //         <button type="submit">Add ToDo</button>
  //       </form>
  //     </div>
  //   )
  // }