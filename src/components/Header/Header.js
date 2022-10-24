import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import './Header.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
    }


    return (
        <nav className='header'>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user && user.uid ?
                        <Link onClick={handleLogOut}>log Out </Link>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Sign Up</Link>
                        </>

                }
                <span> {user?.email}</span>
            </div>
        </nav >
    );
};

export default Header;