import React, { useState, useEffect, useRef } from 'react';
import { useFetching } from '../../hooks/useFetching.js';
import { getPagesCount } from '../../utils/pages.js';
import { useObserver } from '../../hooks/useObserver.js';
import Loader from '../../components/UI/loader/Loader.js';
import NewsList from '../../components/NewsList/NewsList.js';
import NewsFilter from '../../components/filters/NewsFilter.js';
import NewsService from '../../API/NewsService.js';
import styles from '../news/News.module.css';
import MsgBox from '../../components/UI/emptyContentMsg/MsgBox.js';

function News() {
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
    }, [filter.sort, filter.queryField]);

    useEffect(() => {
        const id = setTimeout(() => fetchNews(0, limit, filter, true), 1000);
        return () => clearTimeout(id);
    }, [filter.query]);

    useObserver(lastElement, start < totalPages, isNewsLoading, () => {
        if(news.length > 0) {
            fetchNews(start + limit, limit, filter, false);
        }
    });

    return (
        <div className="App">
            {isNewsLoading && <Loader style={customLoaderPosition}/>}
            <div className={styles.newsWrapper}>
                <NewsFilter filter={filter} setFilter={setFilter}/>
                <hr/>
                {newsError && <MsgBox message='Error'/>}
                <NewsList news={news}/>
                <div ref={lastElement} style={{display: 'hidden', height: '50px'}}></div>
            </div>
        </div>
    );
};

export default News;