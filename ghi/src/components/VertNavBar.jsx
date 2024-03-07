import Logo from "./Logo"
import { useAuthContext } from '@galvanize-inc/jwtdown-for-react';

const VertNavBar = () => {
    const {token} = useAuthContext();

    return (
        <div className="vert-nav-bar flex flex-col bg-cyan-500 flex-none basis-44 h-full">
            <Logo/>
            {token && <p>Logged in user</p>}
        </div>
    )
}

export default VertNavBar
