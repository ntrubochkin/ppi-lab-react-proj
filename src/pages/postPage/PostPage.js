import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NewsService from '../../API/PostsService';
import PostItem from '../../components/PostItem/PostItem';
import Loader from '../../components/UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import styles from '../postPage/NewsItem.module.css';

const PostPage = () => {
    const params = useParams();
    const navigator = useNavigate();

    const [post, setPost] = useState({});
    const [similarNews, setSimilarNews] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const res = await NewsService.getById(id);
        setPost(res.data);
    });

    const [fetchSimilarNews, isSimilarLoading, similarError] = useFetching(async (title, skipId) => {
        const res = await NewsService.getSimilar(title.split(' '), 4, skipId);
        setSimilarNews(res);
    });

    useEffect(() => {
        fetchPostById(params.id);
    }, [params]);

    useEffect(() => {
        fetchSimilarNews(post.title, post.id);
    }, [post]);

    if(error) {
        navigator('*');
    }

    return (
        <div className={styles.bg}>
            {isLoading ?
                <Loader/> :
                <div className={styles.mainInfo}>
                    <div className={styles.postHeader}>
                        <span>{post.title}</span>
                        <a href={post.url} target='_blank'>Source</a>
                    </div>
                    <div>{post.summary}</div>
                    <img src={post.imageUrl}/>
                 </div>
            }
            <div className={styles.sideContent}>
                <span>Similar news</span>
                {isSimilarLoading ?
                    <Loader/> :
                    <div>
                        {similarNews.map((n, i) => <PostItem item={n} key={i}/> )}
                    </div>
                }
            </div>
        </div>
    );
}

export default PostPage;