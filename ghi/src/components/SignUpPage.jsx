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
        <div className="flex w-full flex-col text-white text-xl items-center justify-center px-6 py-8 bg-black bg-opacity-35">
            <div className="flex flex-col gap-6 rounded-2xl bg-custom-db bg-opacity-75 p-10 px-20 shadow-[0_2px_4px_0] shadow-black w-[480px]">
                <h1 className="text-2xl text-center font-bold">
                    Sign up for an account
                </h1>
                {errorMessage && (
                    <h2 className="bg-red-700 p-2 text-center rounded-md mt-2 shadow-[0_2px_4px_0] shadow-black">
                        {errorMessage}
                    </h2>
                )}
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <input
                            id="username"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="p-2 w-full bg-custom-mauve shadow-[0_2px_4px_0] shadow-black rounded placeholder-custom-db text-custom-db"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="p-2 w-full bg-custom-mauve shadow-[0_2px_4px_0] shadow-black rounded placeholder-custom-db text-custom-db"
                            placeholder="Password"

                        />
                    </div>
                    <div>
                        <input
                            id="passwordConf"
                            type="password"
                            onChange={(e) => setPasswordConf(e.target.value)}
                            required
                            className="p-2 w-full bg-custom-mauve shadow-[0_2px_4px_0] shadow-black rounded placeholder-custom-db text-custom-db"
                            placeholder="Password Confirmation"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 text-custom-db bg-custom-gold opacity-85 border-black rounded float-right shadow-[0_2px_4px_0] shadow-black"
                    >
                        Sign up
                    </button>
                    <p className="text-sm text-center mt-4">
                        If you already have an account,{' '}
                        <button
                            className="text-custom-gold"
                            onClick={() => navigate('/login')}
                        >
                            log in
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage
