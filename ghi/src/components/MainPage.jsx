import MainContent from './MainContent'
import SideBar from './SideBar'
import { useGetTokenQuery } from '../store/apiSlice'
import { useNavigate } from 'react-router-dom'
import useWebSocket from 'react-use-websocket'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeChatLog, addChatEntry } from '../store/chatLogSlice'
import { initializeUsers, modifyUsersList } from '../store/activeUsersSlice'


const WS_HOST = import.meta.env.VITE_WS_HOST


const MainPage = () => {
    const { data, isSuccess } = useGetTokenQuery()
    const navigate = useNavigate()
    const [socketUrl, setSocketUrl] = useState('')
    const { readyState, lastJsonMessage, sendJsonMessage } = useWebSocket(socketUrl, {}, Boolean(socketUrl))
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess && data !== null) {
            setSocketUrl(`${WS_HOST}/chat/${data.account.username}`)
        }
    }, [data, isSuccess])

    useEffect(() => {
        const newMessage = JSON.parse(lastJsonMessage)
        console.log(newMessage)
        if (newMessage && newMessage.type === 'init') {
            console.log(newMessage.payload)
            dispatch(initializeChatLog(newMessage.payload.messages))
            dispatch(initializeUsers(newMessage.payload.users))
        }
        if (newMessage && newMessage.type === 'user_status') {
            console.log(newMessage.payload)
            const chatEntry = `${newMessage.payload.user_id} just ${newMessage.payload.status}ed`
            dispatch(addChatEntry(chatEntry))
            dispatch(modifyUsersList(newMessage.payload))
        }
    }, [lastJsonMessage])


    return (
        <div className="main-page flex flex-row min-h-[360px] h-dvh">
            <MainContent />
            <SideBar />
        </div>
    )
}

export default MainPage
