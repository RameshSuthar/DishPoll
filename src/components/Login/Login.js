import { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/feature/loggedInUserDataSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const users = useSelector((state) => state.usersData);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        if(e.target.name === 'username') setUsername(e.target.value);
        else if(e.target.name === 'password') setPassword(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === '') {
            alert('username and password are the required fields');
            return;
        }
        const index = users.findIndex(user => user.userName === username && user.password === password);
        if(index < 0 || index > users.length - 1) {
            alert('Please provide the valid credentials');
        } else {
            dispatch(login({username: users[index].userName}));
            navigate("/", {replace: true});
        }
        setUsername('');
        setPassword('');
    }

    return (

        <div className="main-login-container">
            <div className="login-container">
                <h2 className="login-text">Log<span className="highlight-text">IN</span></h2>
                <form className="login-form">
                    <div className="login-username">
                        <label htmlFor="username">User name</label>
                        <input value={username} name="username" onChange={handleOnChange} id="username" type="text" required/>
                    </div>
                    <div className="login-password">
                        <label htmlFor="password">Password</label>
                        <input value={password} name="password" onChange={handleOnChange}  id="password" type="password" required/>
                    </div>
                    <button type="submit" className="login-submit-btn" onClick={handleOnSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;