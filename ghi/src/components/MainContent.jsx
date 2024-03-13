import ChatBox from './Chatbox'
import MessageInterface from './MessageInterface'

const MainContent = () => {
    return (
        <div className="main-content flex-1 flex flex-col min-w-[480px] h-full  bg-[#fff9e6]">
            <ChatBox />
            <MessageInterface />
        </div>
    )
}

export default MainContent
