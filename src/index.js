import { createStore } from './createStore.js'
import { combineReducers } from './combineReducers.js'

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

function counterReducer(state, action) {
  if (action.type === 'ADD') {
    return state + 1
  } else {
    return state
  }
}

const reducer = combineReducers({
  todoState: todosReducer,
  counterState: counterReducer
})

const initialState = {
  todoState: [],
  counterState: 0
}

const store = createStore(reducer, initialState)
store.dispatch({
  type: 'ADD'
})
console.log(store.getState())
