import ChatUser from './ChatUser'
import { useSelector } from 'react-redux'

const UserList = () => {
  const activeUsers = new Set(useSelector((state) => state.activeUsers.users))
  return (
        <div className="user-list mb-2 flex-1 flex flex-col h-full overflow-auto pt-5">
            <div className="text-center text-white">
                <strong>Active Users</strong>
            </div>
            <ul>
                {[...activeUsers].map((user) => {
                  return <ChatUser key={user} user={user} />
                })}
            </ul>
        </div>
  )
}

export default UserList
