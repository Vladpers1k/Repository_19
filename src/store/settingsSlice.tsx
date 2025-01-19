import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface SettingsState {
  theme: 'light' | 'dark'
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: SettingsState = {
  theme: 'light',
  status: 'idle'
}

export const toggleThemeAsync = createAsyncThunk('settings/toggleThemeAsync', async (_, { getState }) => {
  const state = getState() as { settings: SettingsState }
  const currentTheme = state.settings.theme

  return new Promise<'light' | 'dark'>((resolve) => {
    setTimeout(() => {
      resolve(currentTheme === 'light' ? 'dark' : 'light')
    }, 1000)
  })
})

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleThemeAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(toggleThemeAsync.fulfilled, (state, action) => {
        state.theme = action.payload
        state.status = 'succeeded'
      })
      .addCase(toggleThemeAsync.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default settingsSlice.reducer
