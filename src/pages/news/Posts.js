import React, { useState, useEffect, useRef } from 'react';
import { useFetching } from '../../hooks/useFetching.js';
import { usePosts } from '../../hooks/usePost.js';
import { getPageCount } from '../../utils/pages.js';
import MyButton from '../../components/UI/button/MyButton.js';
import MyModal from '../../components/UI/MyModal/MyModal.js';
import Pagination from '../../components/UI/pagination/Pagination.js';
import Loader from '../../components/UI/loader/Loader.js';
import PostList from '../../components/PostList/PostList.js';
import PostForm from '../../components/PostForm.js';
import PostsFilter from '../../components/PostsFilter.js';
import NewsService from '../../API/PostsService.js';
import { useObserver } from '../../hooks/useObserver.js';
import MySelect from '../../components/UI/select/MySelect.js';
import styles from '../news/Posts.module.css';

function Posts() {
    const [news, setNews] = useState([]);
    const [limit, setLimit] = useState(9);
    const [start, setStart] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const lastElement = useRef();

    // const [filter, setFilter] = useState({sort: '', query: ''});
    // const [modal, setModal] = useState(false);

    const [fetchNews, isNewsLoading, newsError] = useFetching(async (limit, start) => {
        const res = await NewsService.getAll(limit, start);
        const totalCount = await NewsService.getNewsCount();
        setNews([...news, ...res.data]);
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchNews(start, limit);
    }, [start, limit]);

    useObserver(lastElement, start < totalPages, isNewsLoading, () => {
        setStart(start + 9);
    });
    // const sortedAndSearchedPosts = usePosts(news, filter.sort, filter.query);  

    // const createPost = (newPost) => {
    //     setPosts([...posts, newPost]);
    //     setModal(false);
    // }

    // const removePost = (post) => {
    //     setNews(news.filter(p => p.id !== post.id));
    // }

    // const changePage = (page) => {
    //     setStart(page);
    // }

    return (
        <div className="App">
            {/* <MyButton onClick={() => setModal(true)}>Post cringe</MyButton> */}
            {/* <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal> */}
            {/* <hr/> */}
            {/* <PostsFilter filter={filter} setFilter={setFilter}/> */}
            {/* <MySelect 
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Posts count"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 15, name: '15'},
                    {value: -1, name: 'All'}
                ]}
            /> */}
            {isNewsLoading && <Loader/>}
            <div className={styles.newsWrapper}>
                {newsError && <h1>Error</h1>}
                <PostList news={news}/>
                <div ref={lastElement} style={{display: 'hidden', height: '50px'}}></div>
            </div>
        </div>
    );
};

export default Posts;