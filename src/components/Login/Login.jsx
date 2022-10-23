import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="title"> <h1>Login Page</h1></div>
            <form>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="Login" />
                </div>
            </form>
            <Link style={{ textAlign: 'center' }} to='/register'>
                <p>register</p>
            </Link>
        </div >
    );
};

export default Login;