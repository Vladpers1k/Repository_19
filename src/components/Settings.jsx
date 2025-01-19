import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/settingsSlice'

const Settings = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.settings.theme)

  return (
    <div>
      <h2>Settings Page</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  )
}

export default Settings
