import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_HOST = import.meta.env.VITE_API_HOST

const SignUpPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPasswordConf] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== passwordConf) {
            return
        }

        const url = `${API_HOST}/accounts`
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'content-type': 'application/json' },
        }

        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            const data = response.json()
            navigate('/')
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
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
