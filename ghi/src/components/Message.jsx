import { useGetTokenQuery } from '../store/apiSlice'

const Message = (props) => {
    const { data } = useGetTokenQuery()
    const isCurrentUser = props.message.user_id === data.account.username

    if (!props.isFirst) {
        return (
            <li
                className={`p-2 mx-[40px] my-[3px] text-wrap rounded-xl break-all shadow-[0_2px_4px_0] shadow-black ${isCurrentUser
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
                <div
                    className={`mt-4 font-bold flex text-lg text-custom-db items-center ${isCurrentUser
                            ? 'justify-self-end flex-row-reverse' 
                            : 'justify-self-start'
                        }`}
                >
                    <img className="inline bg-slate-200 rounded-2xl shadow-[0_2px_4px_0] shadow-black" src="../../assets/robot-message-icon.svg" width="35px" />
                    <span
                        className={`mx-2 font-bold text-lg text-custom-db truncate ${isCurrentUser
                                ? 'justify-self-end ml-[35px]'
                                : 'justify-self-start mr-[35px]'
                            }`}
                    >
                        {props.message.user_id}
                    </span>
                </div>
                <li
                    className={`p-2 mx-[40px] my-[3px] text-wrap rounded-xl break-all shadow-[0_2px_4px_0] shadow-black ${isCurrentUser
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
