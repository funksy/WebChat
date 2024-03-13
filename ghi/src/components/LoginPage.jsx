import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../store/apiSlice'
import { useGetTokenQuery } from '../store/apiSlice'

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { data, isSuccess } = useGetTokenQuery()
    const [login, loginStatus] = useLoginMutation()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username: username, password: password })
    }

    useEffect(() => {
        if (loginStatus.isError) {
            setErrorMessage(loginStatus.error.data.detail)
        }
    }, [loginStatus])

    useEffect(() => {
        if (isSuccess && data !== null) {
            navigate('/')
        }
    }, [data, isSuccess])

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <h2>{errorMessage}</h2>}
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
