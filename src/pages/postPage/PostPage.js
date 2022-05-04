import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsService from '../../API/PostsService';
import Loader from '../../components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import styles from '../postPage/NewsPage.module.css';

const PostPage = () => {
    const params = useParams();

    const [post, setPost] = useState({});
    // const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const res = await NewsService.getById(id);
        setPost(res.data);
    });

    // const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    //     const res = await NewsService.getCommentsByPostId(id);
    //     setComments(res.data);
    // });

    useEffect(() => {
        fetchPostById(params.id);
        // fetchComments(params.id);
    }, []);

    return (
        <div>
            {isLoading ?
                <Loader/> :
                <div>{post.id}, {post.title}</div>
            }
            {/* <h1>
                Comments
            </h1> */}
            {/* {isCommentsLoading ?
                <Loader/> :
                <div>
                    {comments.map(c => 
                        <div key={c.id}>
                            <h5>{c.email}</h5>
                            <div>{c.body}</div>
                        </div>
                    )}
                </div>
            } */}
        </div>
    );
}

export default PostPage;