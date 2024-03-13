import Logo from './Logo'
import { useGetTokenQuery } from '../store/apiSlice'

const VertNavBar = () => {
    const { data } = useGetTokenQuery()

    return (
        <div className="vert-nav-bar flex flex-col bg--500 flex-none basis-44 h-full border-r-2 border-black bg-custom-db bg-opacity-65">
            <Logo />
            {data && (
                <p className="text-center">Welcome, {data.account.username}</p>
            )}
        </div>
    )
}

export default VertNavBar
