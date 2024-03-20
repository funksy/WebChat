import MessageInput from './MessageInput'
import MessageSubmit from './MessageSubmit'

const MessageInterface = () => {
  return (
        <div className="message-interface flex flex-0 h-20 border-custom-db">
            <MessageInput />
            <MessageSubmit />
        </div>
  )
}

export default MessageInterface
