import React from 'react'

const UserList = ({ users, onRemoveUser }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <button onClick={() => onRemoveUser(user.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default UserList
