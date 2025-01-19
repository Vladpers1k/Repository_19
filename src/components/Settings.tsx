import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from 'store/store'
import { toggleTheme } from '../store/settingsSlice'

const Settings: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.settings.theme)

  return (
    <div>
      <h2>Settings Page</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  )
}

export default Settings
