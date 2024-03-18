import { useGetTokenQuery } from '../store/apiSlice'

const getColorFromId = (str) => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i)
    }
    const r = sum % 256
    const g = (sum * 10) % 256
    const b = (sum * 59) % 256
    return `rgb(${r}, ${g}, ${b})`
}

const Message = (props) => {
    const { data } = useGetTokenQuery()
    const isCurrentUser = props.message.user_id === data.account.username
    const color = getColorFromId(props.message.user_id)

    if (!props.isFirst) {
        return (
        <>
            <li
                className={`mx-[40px] my-[3px] flex ${isCurrentUser ? 'justify-self-end flex-row-reverse' : 'justify-self-start'}`}
            >
                <div className={`peer p-2 rounded-xl shadow-[0_2px_4px_0] shadow-black ${isCurrentUser
                        ? 'bg-custom-gold text-custom-db bg-opacity-85'
                        : 'bg-custom-lb text-white'
                    }`}>
                {props.message.content}
                </div>
                <div className={`invisible peer-hover:visible text-[0.6rem] place-self-end min-w-fit break-keep italic mx-2 `}>{new Date(props.message.timestamp).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })}</div>
            </li>
        </>
            
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
                    <img style={{backgroundColor: color}} className="inline bg-[length:20px_20px] rounded-2xl shadow-[0_2px_4px_0] shadow-black" src="../../assets/robot-message-icon.svg" width="35px" />
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
                    className={`mx-[40px] my-[3px] flex ${isCurrentUser ? 'justify-self-end flex-row-reverse' : 'justify-self-start'}`}
                >
                    <div className={`peer p-2 rounded-xl shadow-[0_2px_4px_0] shadow-black ${isCurrentUser
                            ? 'bg-custom-gold text-custom-db bg-opacity-85'
                            : 'bg-custom-lb text-white'
                        }`}>
                    {props.message.content}
                    </div>
                    <div className={`invisible peer-hover:visible text-[0.6rem] place-self-end min-w-fit break-keep italic mx-2 `}>{new Date(props.message.timestamp).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })}</div>
                </li>
            </>
        )
    }
}

export default Message
