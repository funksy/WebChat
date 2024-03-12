import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../store/apiSlice'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, loginStatus] = useLoginMutation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username: username, password: password })
    }

    useEffect(() => {
        console.log(loginStatus)
        if (loginStatus.isSuccess) {
            console.log('navigating to homepage')
            navigate('/')
        }
    }, [loginStatus])

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage