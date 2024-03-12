import MainContent from './MainContent'
import SideBar from './SideBar'
import { useGetTokenQuery } from '../store/apiSlice'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const { data } = useGetTokenQuery()
    const navigate = useNavigate()

    return (
        <div className="main-page flex flex-row min-h-[360px] h-dvh">
            <MainContent />
            <SideBar />
        </div>
    )
}

export default MainPage
