import React from 'react';
import styles from '../error/Error.module.css';

const Error = () => {
    return (
        <div className={styles.errorWrapper}>
            <h1>404</h1>
            <p>This page does not exist</p>
        </div>
    );
};

export default Error;