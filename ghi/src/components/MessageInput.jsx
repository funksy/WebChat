import { setMessageContent } from '../store/chatInputSlice'
import { useDispatch, useSelector } from 'react-redux'

const MessageInput = () => {
    const dispatch = useDispatch()
    const content = useSelector((state) => state.chatInput.messageContent)
    return (
        <div className="message-input flex flex-1 h-full w-full">
            <textarea
                className="m-2 resize-none rounded text-wrap p-2 w-full placeholder-custom-db bg-custom-mauve"
                value={content}
                placeholder="Type your message here..."
                onChange={(e) => dispatch(setMessageContent(e.target.value))}
            ></textarea>
        </div>
    )
}

export default MessageInput
