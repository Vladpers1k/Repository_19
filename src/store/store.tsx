import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import settingsReducer from './settingsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
