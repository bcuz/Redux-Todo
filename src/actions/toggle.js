export const TOGGLE = 'TOGGLE';

export const toggleTodo = id => {
  
  return {
    type: TOGGLE,
    id
  }

};