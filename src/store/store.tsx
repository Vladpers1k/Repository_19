import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import settingsReducer from './settingsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
