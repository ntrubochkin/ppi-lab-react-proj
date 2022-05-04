import React from 'react';
import MyButton from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';
import styles from '../PostItem/PostItem.module.css';
import { CSSTransition } from 'react-transition-group';


const PostItem = ({item}) => {
    const navigator = useNavigate();

    return (
        <div className={styles.card} onClick={()=> navigator(`/posts/${item.id}`)}>
            <div className={styles.cardHeader}>
                <span className={styles.dateSpan}>{item.publishedAt.split('T')[0]}</span>
                <img src={item.imageUrl} className={styles.skeleton}/>
                <span className={styles.title}>{item.title}</span>
            </div>
            <div>{item.summary}</div>
            <div>
                bookmark btn
            </div>
        </div>
        // <div className={styles.post}>
        //     <div className="post-content">
        //         <strong>{props.post.id}. {props.post.title}</strong>
        //         <div>
        //             {props.post.body}
        //         </div>
        //     </div>
        //     <div className="post-btns">
        //         <MyButton onClick={() => navigator(`/posts/${props.post.id}`)}>Open</MyButton>
        //         <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
        //     </div>
        // </div>
    )
}

export default PostItem;