import ChatUser from "./ChatUser"
import { useSelector } from 'react-redux'



const UserList = () => {
    const activeUsers = useSelector((state) => state.activeUsers.users)
    return (
        <div className="user-list flex-1 flex flex-col bg-green-400">
            <ul>
                {activeUsers.map(user => {
                    return <ChatUser key={user} user={user}/>
                })}
            </ul>
        </div>
    )
}

export default UserList
