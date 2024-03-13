import Message from './Message'
import { useSelector } from 'react-redux'

const ChatBox = () => {
    const messages = useSelector((state) => state.chatLog.messages)

    return (
        <div className="chat-box p-2 flex-1 flex flex-wrap items-end overflow-auto scrollbar-thin h-auto bg-[url('https://img.freepik.com/premium-vector/abstract-seamless-pattern-background_290875-132.jpg')] bg-repeat">
            <ul className="messages flex-1">
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
