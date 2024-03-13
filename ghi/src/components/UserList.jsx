import ChatUser from './ChatUser'
import { useSelector } from 'react-redux'

const UserList = () => {
    const activeUsers = useSelector((state) => state.activeUsers.users)
    return (
        <div className="user-list flex-1 flex flex-col pt-5">
            <div className="text-center">
                <strong>Active Users</strong>
            </div>
            <ul>
                {activeUsers.map((user) => {
                    return <ChatUser key={user} user={user} />
                })}
            </ul>
        </div>
    )
}

export default UserList
