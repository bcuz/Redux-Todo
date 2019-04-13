export const ADD = 'ADD';

export const addTodo = value => {
  return {
    type: ADD,
    value
  }

};