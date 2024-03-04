import MessageInput from "./MessageInput"
import MessageSubmit from "./MessageSubmit"

const MessageInterface = () => {
    return (
        <div className="message-interface flex flex-row flex-0 bg-red-500 h-20">
            <MessageInput/>
            <MessageSubmit/>
        </div>
    )
}

export default MessageInterface