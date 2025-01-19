import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Settings from './components/Settings'
import Users from './components/Users'

const routes = (
  <Router>
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : '')}>
        Users
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
        Settings
      </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Router>
)

export default routes
