import UserAvatar from './UserAvatar'
import LogoutButton from './LogoutButton'
import UserList from './UserList'

const SideBar = () => {
    return (
        <div className="side-bar flex flex-col bg-[#fff9e6] flex-none basis-44 h-full border-l-2 border-black bg-custom-db bg-opacity-65">
            <UserAvatar />
            <LogoutButton />
            <UserList />
        </div>
    )
}

export default SideBar
