interface User {
  id: number
  name: string
}

interface UserListProps {
  users: User[]
  onRemoveUser: (id: number) => void
}

const UserList: React.FC<UserListProps> = ({ users, onRemoveUser }) => {
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
