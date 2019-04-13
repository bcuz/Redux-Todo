export const TOGGLE = 'TOGGLE';

export const toggleTodo = index => {
  
  return {
    type: TOGGLE,
    index
  }

};