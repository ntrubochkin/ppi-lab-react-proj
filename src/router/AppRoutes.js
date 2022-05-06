import About from "../pages/about/About.js";
import Error from "../pages/error/Error.js";
import Login from "../pages/login/Login.js";
import SinglePostPage from "../pages/singlePostPage/SinglePostPage.js";
import News from "../pages/news/News.js";
import Bookmarks from "../pages/bookmarks/Bookmarks";

export const privateRoutes = [
    {path: '/', component: <News/>, exact: true},
    {path: '/about', component: <About/>, exact: false},
    {path: '/news', component: <News/>, exact: true},
    {path: '/news/:id', component: <SinglePostPage/>, exact: true},
    {path: '/bookmarks', component: <Bookmarks/>, exact: true},
    {path: '*', component: <Error/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/', component: <Login/>, exact: true},
    {path: '*', component: <Error/>, exact: true}
]