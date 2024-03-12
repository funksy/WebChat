import { setMessageContent } from "../store/chatInputSlice"
import { useDispatch, useSelector } from 'react-redux'


const MessageInput = () => {

    const dispatch = useDispatch()
    const content = useSelector((state) => state.chatInput.messageContent)
    return (
        <div className="message-input flex-1 h-full w-full bg-purple-600">
            <input value={content} onChange={(e) => dispatch(setMessageContent(e.target.value))}></input>
        </div>
    )
}

export default MessageInput
