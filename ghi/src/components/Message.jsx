const Message = (props) => {
    return (
        <div className="message">
            <li>
                {props.message.user_id} - {props.message.content}
            </li>
        </div>
    )
}

export default Message
