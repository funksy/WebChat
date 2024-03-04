import Message from "./Message"

const ChatBox = () => {
    return (
        <div className="chat-box flex-1 flex items-end bg-yellow-100 h-auto">
            <ul>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </ul>
        </div>
    )
}

export default ChatBox