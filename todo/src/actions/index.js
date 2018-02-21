export const ADD_TASK = 'ADD_TASK';
export const TOGGLE = 'TOGGLE';

let nextToDoID = 0;

export const addTask = (text) => {
  return {
    type: ADD_TASK,
    id: nextToDoID++,
    text
  }
}

export const toggle = (id) => {
  return {
    type: TOGGLE,
    id
  }
}