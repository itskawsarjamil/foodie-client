import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../layout/Main/Main";
import Error from "../../pages/error/Error";
import Services from "../../pages/Services/Services";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Reviews from "../../pages/reviews/Reviews";
import AddService from "../../pages/Services/AddService/AddService";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/myreviews',
                element: <Reviews></Reviews>,
            },
            {
                path: '/addservice',
                element: <AddService></AddService>,
            },
            {
                path: '/signin',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
        ]
    },
])