import { configureStore } from '@reduxjs/toolkit'
import todoReducers from '../Reducers/Reducer'

export const store = configureStore({
  reducer: {
    todos:todoReducers,
  },
})
