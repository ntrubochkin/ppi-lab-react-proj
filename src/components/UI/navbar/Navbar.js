import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AppContext';
import classes from '../navbar/Navbar.module.css';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigator = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigator('/');
    }

    return (
        <div className={classes.navHeader}>
            <MyButton style={{color: 'white'}} onClick={() => logout()}>Log out</MyButton>
            <Link style={{color: 'white'}} to="/about">About</Link>
            <Link style={{color: 'white'}} to="/posts">News</Link>
            <Link style={{color: 'white'}} to="/bookmarks">Bookmarks</Link>
        </div>
    );
};

export default Navbar;