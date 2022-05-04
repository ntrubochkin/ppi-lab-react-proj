import React from "react";
import PostItem from "../PostItem/PostItem";
import classes from '../PostList/PostList.module.css';

const PostList = ({news}) => {
    if(!news.length) {
        return (
            <div>Head empty :(</div>
        );
    }

    return (
        <div className={classes.grid}>
            {news.map((item, index) => 
                <PostItem item={item} key={index}/>
            )}
        </div>
    );
}

export default PostList;