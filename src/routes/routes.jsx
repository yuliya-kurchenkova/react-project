import LoginPage from '../pages/LoginPage/LoginPage';
import PostsPage from '../pages/Posts/PostsPage';
import CommentsPage from "../pages/CommentsPage/CommentsPage";


const routes = {
    loginPage: {
        url: '/',
        component: LoginPage,
    },
    postsPage: {
        url: '/posts',
        component: PostsPage,
    },
    commentsPage: {
        url: '/comments',
        component: CommentsPage,
    }
};
export default routes;