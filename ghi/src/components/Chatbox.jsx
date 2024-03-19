import Message from './Message'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const ChatBox = () => {
    const messages = useSelector((state) => state.chatLog.messages)
    const messageListElem = document.getElementById('message-list')

    useEffect(() => {
        if (messages.length) {
            messageListElem.lastChild.scrollIntoView()
            messageListElem.lastChild.lastChild.style.visibility = 'visible'
        }
    }, [messages])

    return (
        <div className="chat-box p-2 flex-1 flex flex-wrap items-end overflow-auto h-full scroll-smooth">
            <ul id="message-list" className="messages flex-1 grid">
                {messages.map((message, idx) => {
                    if (
                        idx > 0 &&
                        messages[idx - 1].user_id === message.user_id
                    ) {
                        return (
                            <Message
                                message={message}
                                isFirst={false}
                                key={message.id}
                            />
                        )
                    } else {
                        return (
                            <Message
                                message={message}
                                isFirst={true}
                                key={message.id}
                            />
                        )
                    }
                })}
            </ul>
        </div>
    )
}

export default ChatBox
