import { ADD } from '../actions/add';

const defaults = {
  todos: []
}

const rootReducer = (state = defaults, action) => {
  switch (action.type) {
    case ADD:

    return {
      todos: [...state.todos, action.payload]
    }        

    default:
      return state;
  }
}

export default rootReducer;