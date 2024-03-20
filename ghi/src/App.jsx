import MainPage from './components/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import VertNavBar from './components/VertNavBar'


console.table(import.meta.env)

// When using environment variables, you should do a check to see if
// they are defined or not and throw an appropriate error message
const API_HOST = import.meta.env.VITE_API_HOST

if (!API_HOST) {
    throw new Error('VITE_API_HOST is not defined')
}

function App() {
    return (
        <BrowserRouter>
            <div className="main-page flex flex-row min-h-[360px] h-dvh font-pop text-lg bg-[url('https://img.freepik.com/premium-vector/abstract-seamless-pattern-background_290875-132.jpg')] bg-repeat bg-[length:250px_250px]">
                <VertNavBar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
