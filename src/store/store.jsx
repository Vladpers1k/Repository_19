import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import settingsReducer from './settingsSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    settings: settingsReducer
  }
})

export default store
