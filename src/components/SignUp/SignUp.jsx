import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './SignUp.css';

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState();

    const handlaSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);
        if (password.length < 6) {
            return setError('Password need more than 6 characters.')
        }
        if (password !== confirm) {
            return setError('password not match.')
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch((error) => {
                console.error(error)
                // ..
            });

    }


    return (
        <div>
            <div className="title"> <h1>SignUp</h1></div>
            <form onSubmit={handlaSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
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
                <p className='text-error'>{error}</p>
            </Link>
        </div>
    );
};

export default SignUp;