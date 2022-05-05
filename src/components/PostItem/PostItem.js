import React, { useContext } from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import styles from '../PostItem/PostItem.module.css';
import icon from '../../static/icons/notebook.png';
import { BookmarksContext } from '../../context/AppContext';


const PostItem = ({item}) => {
    const navigator = useNavigate();
    const {bookmarks} = useContext(BookmarksContext);

    const customCss = {
        button: {
            border: 'none',
            width:  '32px',
            height: '32px',
            marginLeft: 'auto',
            padding: '0'
        },
        icon: {
            width: '100%',
            height: '100%'
        }
    }

    const addBookmark = (e) => {
        e.stopPropagation();
        
        if(bookmarks.indexOf(item.id) === -1) {
            bookmarks.push(item.id);
        }
    };

    return (
        <div className={styles.card} onClick={()=> navigator(`/posts/${item.id}`)}>
            <div className={styles.cardHeader}>
                <span className={styles.dateSpan}>{item.publishedAt.split('T')[0]}</span>
                <img src={item.imageUrl} className={styles.skeleton}/>
                <span className={styles.title}>{item.title}</span>
            </div>
            <div>{item.summary}</div>
            <MyButton style={customCss.button} onClick={e => addBookmark(e)}>
                <img style={customCss.icon} src={icon}/>
            </MyButton>
        </div>
    )
}

export default PostItem;