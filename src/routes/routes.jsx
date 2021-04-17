import LoginPage from '../pages/LoginPage/LoginPage';
import PostsPage from '../pages/Posts/PostsPage';
import CreatePost from "../pages/CreatePost/CreatePost";


const routes = {
    loginPage: {
        url: '/',
        component: LoginPage,
    },
    postsPage: {
        url: '/posts',
        component: PostsPage,
    },
    newPostPage: {
        url: '/new-post',
        component: CreatePost,
    }
};
export default routes;