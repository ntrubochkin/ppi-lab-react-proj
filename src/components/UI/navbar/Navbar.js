import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AppContext';
import classes from '../navbar/Navbar.module.css';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={classes.navHeader}>
            <MyButton onClick={() => logout()}>Log out</MyButton>
            <Link to="/about">Creator</Link>
            <Link to="/posts">News</Link>
        </div>
    );
};

export default Navbar;