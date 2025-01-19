import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from 'store/store'
import { toggleThemeAsync } from '../store/settingsSlice'

const Settings: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { theme, status } = useSelector((state: RootState) => state.settings)

  return (
    <div>
      <h2>Settings Page</h2>
      <p>Current Theme: {theme}</p>
      <p>Status: {status}</p>
      <button onClick={() => dispatch(toggleThemeAsync())} disabled={status === 'loading'}>
        {status === 'loading' ? 'Changing Theme...' : 'Toggle Theme'}
      </button>
    </div>
  )
}

export default Settings
