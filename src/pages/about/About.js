import React from 'react';
import styles from '../about/About.module.css';
import avatar from '../../static/images/pictures/student.png'

const About = () => {
    return (
        <div className={styles.aboutCard}>
            <img className={styles.avatar} src={avatar}></img>
            <div className={styles.infoBox}>
                <h3>Творческое задание</h3>
                <hr/>
                <span>Группа: РПИС-91</span>
                <hr/>
                <span>ФИО: Трубочкин Никита</span>
                <hr/>
                <span>Предмет: проектирование пользовательских интерфейсов</span>
            </div>
        </div>
    );
};

export default About;