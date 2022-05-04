import React from 'react';
import classes from '../about/About.module.css';
import avatar from '../../static/images/pictures/student.png'

const About = () => {
    return (
        <div className={classes.aboutCard}>
            <img className={classes.avatar} src={avatar}></img>
            <div className={classes.infoBox}>
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