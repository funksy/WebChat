import UserAvatar from './UserAvatar'
import LogoutButton from './LogoutButton'
import UserList from './UserList'

const SideBar = () => {
    return (
        <div className="side-bar flex flex-col flex-none basis-44 max-w-44 h-full border-l-2 border-black bg-custom-db">
            <UserAvatar />
            <UserList />
            <LogoutButton />
        </div>
    )
}

export default SideBar
