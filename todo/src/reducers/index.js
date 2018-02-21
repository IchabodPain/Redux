import { ADD_TASK } from '../actions';
import { TOGGLE } from '../actions';

const initialState = {
  todos: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case TOGGLE:
      console.log(action);
      return state;
    //   return Object.assign({}, {
    //     todos: state.todos.map((todo) => {
    //       if (todo.id === action.id) {
    //         todo.completed = !todo.completed
    //       }
    //     })
    //   }
    // )
    // case TOGGLE:
    //   return Object.assign({}, state, {
    //     todos: state.todos.map((todo, index) => {
    //       if (index === action.index) {
    //         return Object.assign({}, todo, {
    //           completed: !todo.completed
    //         })
    //       }
    //       return todo
    //     })
    //   })
    default:
      return state;
  }
};