import { pushButton } from '../store/chatInputSlice'
import { useDispatch } from 'react-redux'

const MessageSubmit = () => {
    const dispatch = useDispatch()
    return (
        <div className="message-submit flex justify-center items-center w-24">
            <button
                className="border p-5 py-4 bg-orange-300 rounded"
                onClick={() => dispatch(pushButton())}
            >
                Send
            </button>
        </div>
    )
}

export default MessageSubmit
