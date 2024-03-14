import { pushButton } from '../store/chatInputSlice'
import { useDispatch, useSelector } from 'react-redux'

const MessageSubmit = () => {
    const dispatch = useDispatch()
    const chatInputLength = useSelector(state => state.chatInput.messageContent.length)

    return (
        <div className="message-submit flex justify-center items-center w-24">
            <button
                className=" p-5 py-4 text-custom-db bg-custom-gold bg-opacity-85 rounded shadow-[0_2px_4px_0] shadow-black"
                onClick={() => dispatch(pushButton())}
                disabled={chatInputLength === 0 ? true : false} 
            >
                Send
            </button>
        </div>
    )
}

export default MessageSubmit
