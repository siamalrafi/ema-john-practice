import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <div className="title"> <h1>SignUp</h1></div>
            <form>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                </div>
                <div className="input-container">
                    <label>Confirm Pass </label>
                    <input type="password" name="confirm" required />
                </div>
                <div className="button-container">
                    <input type="submit" value="SignUp" />
                </div>
            </form>
            <Link style={{ textAlign: 'center' }} to='/login'>
                <p>Login</p>
            </Link>
        </div>
    );
};

export default SignUp;