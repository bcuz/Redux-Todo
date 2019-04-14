import { ADD } from '../actions/add';
import { TOGGLE } from '../actions/toggle';
import { DELETE } from '../actions/delete';

const defaults = {
  todos: []
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    case ADD:

      let newTodo = { value: action.value, completed: false}

      return {
        todos: [...state.todos, newTodo]
      }        
    
    case TOGGLE:              
      return {
        todos: state.todos.map((todo, i) => {
          return action.index === i ? { ...todo, completed: !todo.completed } : todo
        })
      }
      
    case DELETE:              
      return {
        todos: state.todos.filter((todo, i) => action.index !== i)
      }        

    default:
      return state;
  }
}

export default rootReducer;