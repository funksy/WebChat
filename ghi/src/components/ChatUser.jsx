const ChatUser = (props) => {
  return (
        <div className="chat-user w-36 text-center border rounded m-2 p-1 bg-custom-mauve">
            <li className="truncate">{props.user}</li>
        </div>
  )
}

export default ChatUser
