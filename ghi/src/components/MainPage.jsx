import MainContent from "./MainContent"
import SideBar from "./SideBar"

const MainPage = () => {
    return (
        <div className="main-page flex flex-row min-h-[360px] h-dvh" >
            <MainContent/>
            <SideBar/>
        </div>
    )
}

export default MainPage
