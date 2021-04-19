import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
    getPostsList() {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get('posts?_start=0&_limit=4');
    },
    deletePosts(id) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.delete(`/posts/${id}`);
    },
    updatePost(id, post) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        console.log(id, post)
        return instCred.patch(`/posts/${id}`, post);

    },
    getCommentsList() {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get('/comments?_start=0&_limit=33');
    },
    createPost(post) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.post('/posts', post);
    },
};

