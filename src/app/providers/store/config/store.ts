import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/store/config/StateSchema'
import { counterReducer } from 'entities/Counter'

export const createStore = (initialState?: StateSchema) => {
  return configureStore({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
