import axios from "axios";

export default class NewsService {
    static URL = 'https://api.spaceflightnewsapi.net/v3/articles';

    static async getNewsCount() {
        const res = await axios.get(this.URL + '/count');
        return res.data;
    }

    static async getAll(start, limit) {
        const res = await axios.get(this.URL, {
            params: {
                _start: start,
                _limit: limit
            }
        });
        return res;
    }

    static async getById(id) {
        const res = await axios.get(this.URL + `/${id}`);
        return res;
    }

    // static async getCommentsByPostId(id) {
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    //     return res;
    // }
}