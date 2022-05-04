import React, { useContext } from 'react';
import { AuthContext } from '../../context/AppContext.js';
import classes from '../login/Login.module.css';
import MyButton from '../../components/UI/button/MyButton.js';
import MyInput from '../../components/UI/input/MyInput.js';

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
        <div className={classes.bg}>
            <div className={classes.loginWrapper}>
                <h1 style={{color: 'white'}}>Login</h1>
                <form onSubmit={login} className={classes.inputsForm}>
                    <MyInput style={customStyle.input} type='text' placeholder='login'/>
                    <MyInput style={customStyle.input} type='password' placeholder='password'/>
                    <MyButton style={customStyle.button}>Login</MyButton>
                </form>
            </div>
        </div>
    );
};

export default Login;