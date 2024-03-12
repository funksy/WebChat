import Message from './Message'
import { useSelector } from 'react-redux'

const ChatBox = () => {
    const messages = useSelector((state) => state.chatLog.messages)

    return (
        <div className="chat-box flex-1 flex items-end bg-yellow-100 h-auto">
            <ul>
                {messages
                    .filter((message) => {
                        return typeof message === 'object'
                    })
                    .map((message) => {
                        return <Message key={message.id} message={message} />
                    })}
            </ul>
        </div>
    )
}

export default ChatBox
