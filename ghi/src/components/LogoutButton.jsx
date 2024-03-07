import useToken from '@galvanize-inc/jwtdown-for-react';
import {useNavigate} from "react-router-dom";

const LogoutButton = () => {
    const {logout} = useToken();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    }
    
    return (
        <div className="logout-button h-10 w-auto bg-pink-700">
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default LogoutButton
