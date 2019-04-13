export const DELETE = 'DELETE';

export const deleteTodo = index => {
  
  return {
    type: DELETE,
    index
  }

};