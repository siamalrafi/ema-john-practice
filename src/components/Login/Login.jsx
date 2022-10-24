import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.init';




const auth = getAuth(app);


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            });

    }



    return (
        <div>
            <div className="title"> <h1>Login Page</h1></div>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
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