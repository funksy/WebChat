import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignupMutation } from '../store/apiSlice'
import { useGetTokenQuery } from '../store/apiSlice'

const SignUpPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const navigate = useNavigate()
    const [signup, signupStatus] = useSignupMutation()
    const [errorMessage, setErrorMessage] = useState('')
    const { data, isSuccess } = useGetTokenQuery()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordConf) {
            setErrorMessage('Passwords Do Not Match')
        } else {
            signup({ username: username, password: password })
        }
    }

    useEffect(() => {
        if (signupStatus.isError) {
            setErrorMessage(signupStatus.error.data.detail)
        }
    }, [signupStatus])

    useEffect(() => {
        if (isSuccess && data !== null) {
            navigate('/')
        }
    }, [data, isSuccess])

    return (
        <div>
            <h1>Sign Up</h1>
            {errorMessage && <h2>{errorMessage}</h2>}
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="password-conf">Password Confirmation</label>
                <input
                    id="password-conf"
                    onChange={(e) => setPasswordConf(e.target.value)}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpPage
