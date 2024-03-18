import { setMessageContent, pushButton } from '../store/chatInputSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'

const MessageInput = () => {
    const dispatch = useDispatch()
    const content = useSelector((state) => state.chatInput.messageContent)
    const inputElem = useRef(null)

    const handleEnterKey = (e) => {
        if (e.key == "Enter") {
            e.preventDefault()
            if (content.length > 0) {   
                dispatch(pushButton())
                inputElem.current.focus()
            }
        }
    }

    useEffect(() => {
        inputElem.current.focus()
    }, [])

    return (
        <div className="message-input flex flex-1 h-full w-full">
            <textarea
                className="m-2 resize-none rounded text-wrap p-2 w-full placeholder-custom-db text-custom-db bg-custom-mauve shadow-[0_2px_4px_0] shadow-black focus:brightness-125"
                value={content}
                placeholder="Type your message here..."
                onChange={(e) => dispatch(setMessageContent(e.target.value))}
                ref={inputElem}
                onKeyDown={(e) => handleEnterKey(e)}
            ></textarea>
        </div>
    )
}

export default MessageInput
