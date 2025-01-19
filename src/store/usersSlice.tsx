import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
}

const initialState: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload)
    },
    removeUser: (state, action: PayloadAction<number>) => {
      return state.filter((user) => user.id !== action.payload)
    }
  }
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
