import Logo from './Logo'
import { useGetTokenQuery } from '../store/apiSlice'

const VertNavBar = () => {
    const { data } = useGetTokenQuery()

    return (
        <div className="vert-nav-bar flex flex-col bg-cyan-500 flex-none basis-44 h-full">
            <Logo />
            {data && <p>Logged in as {data.account.username}</p>}
        </div>
    )
}

export default VertNavBar
