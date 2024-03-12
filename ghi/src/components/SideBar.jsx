import UserAvatar from './UserAvatar'
import LogoutButton from './LogoutButton'
import UserList from './UserList'

const SideBar = () => {
    return (
        <div className="side-bar flex flex-col bg-slate-600 flex-none basis-44 h-full">
            <UserAvatar />
            <LogoutButton />
            <UserList />
        </div>
    )
}

export default SideBar
