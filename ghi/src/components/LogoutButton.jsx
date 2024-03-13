import { useLogoutMutation } from '../store/apiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { resetUsers } from '../store/activeUsersSlice'
import { resetChatLog } from '../store/chatLogSlice'
import { useDispatch } from 'react-redux'

const LogoutButton = () => {
    const [logout, logoutStatus] = useLogoutMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
        dispatch(resetChatLog())
        dispatch(resetUsers())
    }

    useEffect(() => {
        if (logoutStatus.isSuccess) navigate('/login')
    }, [logoutStatus])

    return (
        <div className="logout-button text-xl font-bold flex h-10 w-auto justify-center">
            <button className="button-item border-2 px-3 rounded bg-red-500" onClick={handleClick}>Log Out</button>
        </div>
    )
}

export default LogoutButton
