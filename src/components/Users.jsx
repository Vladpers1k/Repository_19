import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserList from './Nested/UserList'
import { addUser, removeUser } from '../store/usersSlice'

const Users = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState('')

  const handleAddUser = () => {
    if (newUser) {
      dispatch(addUser({ id: Date.now(), name: newUser }))
      setNewUser('')
    }
  }

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id))
  }

  return (
    <div className="users-page">
      <h2>Users Page</h2>
      {}
      <UserList users={users} onRemoveUser={handleRemoveUser} />
      <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} placeholder="Add new user" />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  )
}

export default Users
