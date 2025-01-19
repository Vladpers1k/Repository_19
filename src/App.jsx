import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from './store/store'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import routes from './routes'

const App = () => {
  const theme = useSelector((state) => state.settings.theme)

  document.body.className = theme

  return (
    <div>
      <h1>React Redux Demo</h1>
      {routes}
    </div>
  )
}

export default App
