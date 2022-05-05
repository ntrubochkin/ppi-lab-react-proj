import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import styles from '../pagination/Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);

    return (
        <div className={styles.pageItemsWrapper}>
            {pagesArray.map(p => 
                <span 
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? [styles.pageItem, styles.currentItem].join(' ') : styles.pageItem}
                    >
                    {p}
                </span>)
            }
        </div>
    );
};

export default Pagination;