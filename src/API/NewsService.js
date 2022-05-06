import axios from "axios";

export default class NewsService {
    static URL = 'https://api.spaceflightnewsapi.net/v3/articles';

    static async getNewsCount() {
        const res = await axios.get(this.URL + '/count');
        return res.data;
    }

    static async getNews(start, limit, filter) {
        let currentUrl = `${this.URL}?_start=${start}&_limit=${limit}`;

        if(filter.sort) {
            currentUrl += `&_sort=${filter.sort}`;
        }

        if(filter.query) {
            if(!filter.queryField || filter.queryField === 'title') {
                currentUrl += `&title_contains=${filter.query}`;
            } else {
                currentUrl += `&summary_contains=${filter.query}`;
            }
        }

        const res = await fetch(currentUrl);
        return await res.json();
    }

    static async getById(id) {
        const res = await axios.get(this.URL + `/${id}`);
        return res;
    }

    static async getSimilar(words, limit, originId) {
        let arr = [];
        
        for(const word of words) {
            const res = await fetch(`${this.URL}?_limit=${limit}&title_contains=${word}`); 
            const news = await res.json();

            for(const item of news) {
                if(item.id != originId) {
                    arr.push(item);
                }
            }
        }

        return arr;
    }
}