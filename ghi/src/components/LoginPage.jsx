import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useToken();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        e.target.reset();
        navigate('/');
    }
    
    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username">Username</label>
            <input id="username" onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input id="password" onChange={(e) => setPassword(e.target.value)}/>
            <button>Login</button>
        </form>
    </div>
    )
}

export default LoginPage
