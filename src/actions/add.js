export const ADD = 'ADD';

export const addTodo = (value, id) => {
  return {
    type: ADD,
    payload: {id, value, completed: false}
  }

};