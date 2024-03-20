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
        <div className="logout-button text-x flex place-content-center mb-4">
            <button
                className="button-item px-8 py-2 text-custom-db bg-custom-gold opacity-85 border-black rounded shadow-[0_2px_4px_0] shadow-black"
                onClick={handleClick}
            >
                Log Out
            </button>
        </div>
  )
}

export default LogoutButton
