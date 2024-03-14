import { useGetTokenQuery } from '../store/apiSlice'

const Message = (props) => {
    const { data } = useGetTokenQuery()
    const isCurrentUser = props.message.user_id === data.account.username

    if (!props.isFirst) {
        return (
            <li
                className={`p-2 my-[3px] text-wrap rounded-xl break-all shadow-[0_2px_4px_0] shadow-black ${
                    isCurrentUser
                        ? 'bg-custom-gold justify-self-end text-custom-db bg-opacity-85'
                        : 'bg-custom-lb justify-self-start text-white'
                }`}
            >
                {props.message.content}
            </li>
        )
    } else {
        return (
            <>
                <p
                    className={`mt-4 font-bold text-lg text-custom-db ${
                        isCurrentUser
                            ? 'justify-self-end'
                            : 'justify-self-start'
                    }`}
                >
                    {props.message.user_id}
                </p>
                <li
                    className={`p-2 my-[3px] text-wrap rounded-xl break-all shadow-[0_2px_4px_0] shadow-black ${
                        isCurrentUser
                            ? 'bg-custom-gold justify-self-end text-custom-db bg-opacity-85'
                            : 'bg-custom-lb justify-self-start text-white'
                    }`}
                >
                    {props.message.content}
                </li>
            </>
        )
    }
}

export default Message
