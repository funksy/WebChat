import ChatBox from "./Chatbox"
import MessageInterface from "./MessageInterface"

const MainContent = () => {
    return (
        <div className="main-content bg-lime-600 flex-1 flex flex-col min-w-[480px] h-full">
            <ChatBox/>
            <MessageInterface/>
        </div>
    )
}

export default MainContent