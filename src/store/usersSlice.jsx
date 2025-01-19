import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload)
    }
  }
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
