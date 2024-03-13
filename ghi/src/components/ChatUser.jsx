const ChatUser = (props) => {
    return (
        <div className="chat-user text-center border rounded m-2 p-1 bg-custom-mauve">
            <li>{props.user}</li>
        </div>
    )
}

export default ChatUser
