import { ADD_TASK } from '../actions';
import { TOGGLE } from '../actions';

const initialState = {
  todos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newState = Object.assign({}, {
        todos: [
          ...state.todos,
          {
            text: action.payload,
            id: action.id,
            completed: false
          }
        ]
      });
      console.log(newState);
      return newState;

    case TOGGLE:
      let tempState = Object.assign({}, {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) Object.assign(todo, { completed: !todo.completed});
          return todo;
        })
      });
      console.log(tempState);
      return tempState;
      
    default:
      return state;
  }
};