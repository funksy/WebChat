import ChatUser from "./ChatUser"

const UserList = () => {
    return (
        <div className="user-list flex-1 flex flex-col bg-green-400">
            <ul>
                <ChatUser/>
                <ChatUser/>
                <ChatUser/>
            </ul>
        </div>
    )
}

export default UserList