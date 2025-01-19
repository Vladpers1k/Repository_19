import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import routes from './routes'
import './App.css'

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.settings.theme)

  useEffect(() => {
    document.body.className = theme

    return () => {
      document.body.className = ''
    }
  }, [theme])

  return (
    <div>
      <h1>React Redux Demo</h1>
      {routes}
    </div>
  )
}

export default App
