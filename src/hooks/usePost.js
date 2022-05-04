import {useMemo} from 'react';
import NewsService from '../API/PostsService';

// export const useSortedPosts = (posts, sort) => {
//     const sortedPosts = useMemo(() => {
//         if(sort) {
//           return [...posts]
//             .sort((a, b) => a[sort].localeCompare(b[sort]));
//         }
//         return posts;
//       }, [sort, posts]);

//     return sortedPosts;
// };

export const usePosts = (sort, query, queryField, callback) => {
    const sortedAndSearchedPosts = useMemo(() => {
        if(!sort && !query && !queryField) {
          return;
        }
        
        const res = NewsService.getSortedAndFiltered(sort, query);
        return res;
    }, [sort, query, queryField]);

    return sortedAndSearchedPosts;
}