import { ADD } from '../actions/add';
import { TOGGLE } from '../actions/toggle';

const defaults = {
  todos: []
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    case ADD:

    return {
      todos: [...state.todos, action.payload]
    }        
    
    case TOGGLE:
      let desiredTodo = state.todos.find(todo => todo.id === action.id)
      // filter all objs from todos that dont have the id
      let allOtherTodos = state.todos.filter(todo => todo.id !== action.id) 
      
      desiredTodo.completed = !desiredTodo.completed      

      let newArr = [...allOtherTodos, desiredTodo]
      newArr.sort((a, b) => a.id - b.id)
                
      return {
        todos: newArr
      }        

    default:
      return state;
  }
}

export default rootReducer;