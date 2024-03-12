// This makes VSCode check types as if you are using TypeScript
//@ts-check
import './App.css'
import MainPage from './components/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import VertNavBar from './components/VertNavBar'

// All your environment variables in vite are in this object
console.table(import.meta.env)

// When using environment variables, you should do a check to see if
// they are defined or not and throw an appropriate error message
const API_HOST = import.meta.env.VITE_API_HOST

if (!API_HOST) {
    throw new Error('VITE_API_HOST is not defined')
}

/**
 * This is an example of using JSDOC to define types for your component
 * @typedef {{module: number, week: number, day: number, min: number, hour: number}} LaunchInfo
 * @typedef {{launch_details: LaunchInfo, message?: string}} LaunchData
 *
 * @returns {React.ReactNode}
 */
function App() {
    return (
        <BrowserRouter>
            <div className="main-page flex flex-row min-h-[360px] h-dvh">
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
