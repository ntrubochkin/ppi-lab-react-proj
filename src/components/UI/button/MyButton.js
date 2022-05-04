import React from "react";
import classes from './Button.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
}

export default MyButton;