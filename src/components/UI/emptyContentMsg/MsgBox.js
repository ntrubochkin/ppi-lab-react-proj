import React from "react";
import styles from '../emptyContentMsg/MsgBox.module.css';

const MsgBox = ({message}) => {
    return (
        <div className={styles.messageWrapper}>{message}</div>
    );
};

export default MsgBox;