import React, { useContext } from 'react';
import { AuthContext } from '../../context/AppContext.js';
import MyButton from '../../components/UI/button/MyButton.js';
import MyInput from '../../components/UI/input/MyInput.js';
import styles from '../login/Login.module.css';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    var customStyle = {
        input: {
            width: '250px',
            margin: '15px auto'
        },
        button: {
            margin: '15px auto',
            color: 'white'
        }
    };

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };

    return (
        <div className={styles.bg}>
            <div className={styles.loginWrapper}>
                <h1 style={{color: 'white'}}>Login</h1>
                <form onSubmit={login} className={styles.inputsForm}>
                    <MyInput style={customStyle.input} type='text' placeholder='login'/>
                    <MyInput style={customStyle.input} type='password' placeholder='password'/>
                    <MyButton style={customStyle.button}>Login</MyButton>
                </form>
            </div>
        </div>
    );
};

export default Login;