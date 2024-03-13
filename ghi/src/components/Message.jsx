import { useGetTokenQuery } from '../store/apiSlice'

const Message = (props) => {
    const { data } = useGetTokenQuery()
    const isCurrentUser = props.message.user_id === data.account.username

    const parts = props.message.content.split(props.message.user_id)
    return (
        <div className="message grid pb-2">
            <li
                className={`p-2 my-1 text-wrap bg-opacity-80 rounded-xl break-all shadow-[0_2px_4px_0] ${
                    isCurrentUser
                        ? 'bg-custom-lb justify-self-end shadow-black'
                        : 'bg-custom-gold justify-self-start shadow-black'
                }`}
            >
                {isCurrentUser ? (
                    <>
                        {parts[0]} |{' '}
                        <span className="font-bold">
                            {props.message.user_id}
                        </span>
                        {parts[1]}
                    </>
                ) : (
                    <>
                        <span className="font-bold">
                            {props.message.user_id}
                        </span>
                        {parts[1]} | {parts[0]}
                    </>
                )}
            </li>
        </div>
    )
}

export default Message
