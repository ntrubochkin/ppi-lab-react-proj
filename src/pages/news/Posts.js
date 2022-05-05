import React, { useState, useEffect, useRef } from 'react';
import { useFetching } from '../../hooks/useFetching.js';
import { usePosts } from '../../hooks/usePost.js';
import { getPagesCount } from '../../utils/pages.js';
import MyButton from '../../components/UI/button/MyButton.js';
import MyModal from '../../components/UI/MyModal/MyModal.js';
import Pagination from '../../components/UI/pagination/Pagination.js';
import Loader from '../../components/UI/loader/Loader.js';
import PostList from '../../components/PostList/PostList.js';
import PostForm from '../../components/PostForm.js';
import PostsFilter from '../../components/filters/PostsFilter.js';
import NewsService from '../../API/PostsService.js';
import { useObserver } from '../../hooks/useObserver.js';
import MySelect from '../../components/UI/select/MySelect.js';
import styles from '../news/Posts.module.css';

function Posts() {
    const [news, setNews] = useState([]);
    const [limit, setLimit] = useState(9);
    const [start, setStart] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [filter, setFilter] = useState({sort: '', query: '', queryField: ''});
    const lastElement = useRef();

    const customLoaderPosition = {
        position: 'absolute'
    };

    const [fetchNews, isNewsLoading, newsError] = useFetching(async (start, limit, filter, clear) => {
        const res = await NewsService.getNews(start, limit, filter);
        const totalCount = await NewsService.getNewsCount();
        if(clear) {
            setNews(res);
        } else {
            setNews([...news, ...res]);
        }
        setStart(start);
        setTotalPages(getPagesCount(totalCount, limit));
    });

    useEffect(() => {
        fetchNews(0, limit, filter, true);
    }, [filter]);

    useObserver(lastElement, start < totalPages, isNewsLoading, () => {
        if(news.length > 0) {
            fetchNews(start + limit, limit, filter, false);
        }
    });

    return (
        <div className="App">
            {isNewsLoading && <Loader style={customLoaderPosition}/>}
            <div className={styles.newsWrapper}>
                <PostsFilter filter={filter} setFilter={setFilter}/>
                <hr/>
                {newsError && <h1>Error</h1>}
                <PostList news={news}/>
                <div ref={lastElement} style={{display: 'hidden', height: '50px'}}></div>
            </div>
        </div>
    );
};

export default Posts;