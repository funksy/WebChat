import { useLogoutMutation } from '../store/apiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LogoutButton = () => {
    const [logout, logoutStatus] = useLogoutMutation()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }

    useEffect(() => {
        if (logoutStatus.isSuccess) navigate('/login')
    }, [logoutStatus])

    return (
        <div className="logout-button h-10 w-auto bg-pink-700">
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default LogoutButton
