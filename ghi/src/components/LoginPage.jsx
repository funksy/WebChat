import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useGetTokenQuery } from '../store/apiSlice'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { data, isSuccess } = useGetTokenQuery()
  const [login, loginStatus] = useLoginMutation()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ username, password })
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
        <div className="flex w-full flex-col text-white text-xl items-center justify-center px-6 py-8 bg-custom-lb bg-opacity-35">
            <div className="flex flex-col gap-6 rounded-2xl bg-custom-db bg-opacity-75 p-10 px-20 shadow-[0_2px_4px_0] shadow-black w-[480px]">
                <h1 className="text-2xl text-center font-bold">
                    Sign in to your account
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
                    <button
                        type="submit"
                        className="text-black mt-4 px-4 py-2 bg-custom-gold opacity-85 border-black rounded float-right shadow-[0_2px_4px_0] shadow-black"
                    >
                        Login
                    </button>
                    <p className="text-sm text-center mt-4">
                        {"If you don't have an account, "}
                        <button
                            type="button"
                            className="text-custom-gold"
                            onClick={() => navigate('/signup')}
                        >
                            sign up
                        </button>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default LoginPage
