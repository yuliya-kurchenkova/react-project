import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
    getPostsList() {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get('posts?_start=0&_limit=20');
    },
    deletePosts(id) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.delete(`/posts/${id}`);
    },
    createPost(post) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.post('/posts', post);
    },
    updatePost(id, post) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        console.log(id, post)
        return instCred.patch(`/posts/${id}`, post);

    }
};