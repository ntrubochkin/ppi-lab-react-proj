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
}