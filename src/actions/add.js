export const ADD = 'ADD';

export const addTodo = value => {
  return {
    type: ADD,
    payload: {value, completed: false}
  }
};