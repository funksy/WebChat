import { pushButton } from "../store/chatInputSlice"
import { useDispatch } from 'react-redux'

const MessageSubmit = () => {
    const dispatch = useDispatch()
    return (
        <div className="message-submit flex-0 bg-orange-500 w-24">
            <button onClick={() => dispatch(pushButton())}>submit</button>
        </div>
    )
}

export default MessageSubmit
