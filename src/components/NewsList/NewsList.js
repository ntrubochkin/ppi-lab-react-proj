import React from "react";
import NewsItem from "../NewsItem/NewsItem.js";
import styles from '../NewsList/NewsList.module.css';
import MsgBox from "../UI/emptyContentMsg/MsgBox.js";

const NewsList = ({news}) => {
    if(!news.length) {
        return (
            <MsgBox message='Empty :('/>
        );
    }

    return (
        <div className={styles.grid}>
            {news.map((item, index) => 
                <NewsItem item={item} key={index}/>
            )}
        </div>
    );
}

export default NewsList;