import { AnyAction, Reducer } from './types/types'

const createStore = (reducer: Reducer, initialState: any) => {
  let state = initialState
  return {
    dispatch: (action: AnyAction) => {
      state = reducer(state, action)
    },
    getState: () => state
  }
}

export { createStore }
