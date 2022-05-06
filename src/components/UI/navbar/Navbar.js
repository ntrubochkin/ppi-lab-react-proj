import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AppContext';
import MyButton from '../button/MyButton';
import styles from '../navbar/Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const navigator = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigator('/');
    }

    return (
        <div className={styles.navHeader}>
            <MyButton style={{color: 'white'}} onClick={() => logout()}>Log out</MyButton>
            <Link style={{color: 'white'}} to="/about">About</Link>
            <Link style={{color: 'white'}} to="/news">News</Link>
            <Link style={{color: 'white'}} to="/bookmarks">Bookmarks</Link>
        </div>
    );
};

export default Navbar;