import MainContent from './MainContent'
import SideBar from './SideBar'
import { useGetTokenQuery } from '../store/apiSlice'
import { useNavigate } from 'react-router-dom'
import useWebSocket from 'react-use-websocket'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeChatLog, addChatEntry } from '../store/chatLogSlice'
import { initializeUsers, modifyUsersList } from '../store/activeUsersSlice'
import { setMessageContent, pushButton } from '../store/chatInputSlice'

const WS_HOST = import.meta.env.VITE_WS_HOST

const MainPage = () => {
  const { data, isSuccess } = useGetTokenQuery()
  const navigate = useNavigate()
  const [socketUrl, setSocketUrl] = useState('')
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(
    socketUrl,
    {},
    Boolean(socketUrl)
  )
  const dispatch = useDispatch()
  const messageInput = useSelector((state) => state.chatInput.messageContent)
  const buttonPress = useSelector((state) => state.chatInput.submitButton)

  useEffect(() => {
    if (isSuccess && data === null) {
      navigate('/login')
    }

    if (isSuccess && data !== null) {
      setSocketUrl(`${WS_HOST}/chat/${data.account.username}`)
    }
  }, [data, isSuccess])

  useEffect(() => {
    const newMessage = JSON.parse(lastJsonMessage)
    if (newMessage && newMessage.type === 'init') {
      dispatch(initializeChatLog(newMessage.payload.messages))
      dispatch(initializeUsers(newMessage.payload.users))
    }
    if (newMessage && newMessage.type === 'user_status') {
      // const chatEntry = `${newMessage.payload.user_id} just ${newMessage.payload.status}ed`
      // dispatch(addChatEntry(chatEntry))
      dispatch(modifyUsersList(newMessage.payload))
      return
    }
    if (newMessage && newMessage.type === 'message') {
      dispatch(addChatEntry(newMessage.payload.message))
    }
  }, [lastJsonMessage])

  useEffect(() => {
    if (buttonPress) {
      const newInputPacket = {
        type: 'message',
        payload: {
          action: 'new',
          message: {
            user_id: data.account.username,
            chatroom_id: '1',
            content: messageInput
          }
        }
      }

      sendJsonMessage(newInputPacket)
      dispatch(setMessageContent(''))
      dispatch(pushButton())
    }
  }, [buttonPress])

  return (
        <div className="main-page flex flex-row min-h-[360px] w-dvw h-dvh">
            <MainContent />
            <SideBar />
        </div>
  )
}

export default MainPage
