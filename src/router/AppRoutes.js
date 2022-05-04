import About from "../pages/about/About";
import Error from "../pages/Error";
import Login from "../pages/login/Login";
import PostPage from "../pages/postPage/PostPage";
import Posts from "../pages/news/Posts";

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: false},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostPage/>, exact: true},
    {path: '*', component: <Posts/>, exact: true},
]

export const publicRoutes = [
    {path: '/about', component: <About/>, exact: false},
    {path: '/login', component: <Login/>, exact: true},
    {path: '*', component: <Error/>, exact: true}
]