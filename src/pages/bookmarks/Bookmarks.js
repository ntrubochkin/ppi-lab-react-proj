import React, { useContext, useEffect, useState } from "react";
import { BookmarksContext } from "../../context/AppContext";
import { useFetching } from "../../hooks/useFetching";
import { getPagesCount } from "../../utils/pages";
import Loader from "../../components/UI/loader/Loader";
import NewsList from "../../components/NewsList/NewsList.js";
import NewsService from "../../API/NewsService.js";
import Pagination from "../../components/UI/pagination/Pagination";
import styles from '../bookmarks/Bookmarks.module.css';

const Bookmarks = () => {
    const {bookmarks} = useContext(BookmarksContext);

    const ITEMS_PER_PAGE = 6;

    const [news, setNews] = useState([]);

    const [showedItems, setShowedItems] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    const customLoaderPosition = {
        position: 'absolute'
    };

    const [fetchBookmarks, isBookmarksLoading, error] = useFetching(async (arr) => {
        let data = [];

        for (const id of arr) {
            let item = await NewsService.getById(id);
            data.push(item.data);
        }

        setNews(data);
        setTotalPages(getPagesCount(data.length, 6));
        changePage(1);
        setShowedItems(getCurrentItems(data, page, ITEMS_PER_PAGE));
    });

    useEffect(() => {
        fetchBookmarks(bookmarks);
    }, []);

    const getCurrentItems = (array, page, count) => {
        let start = (page - 1) * count;
        let end = start + count;

        if(end > array.length) {
            end = array.length;
        }

        return array.slice(start, end);
    }

    const changePage = (p) => {
        if(p == page) {
            return;
        }

        setPage(p);
        setShowedItems(getCurrentItems(news, p, ITEMS_PER_PAGE));
    };

    return (
        <div className={styles.bg}>
            {isBookmarksLoading ?
                <Loader style={customLoaderPosition}/> :
                <NewsList news={showedItems}/>
            }
            {bookmarks.length > ITEMS_PER_PAGE &&
                <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
            }
        </div>
    );
};

export default Bookmarks;