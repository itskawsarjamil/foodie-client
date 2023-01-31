import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../layout/Main/Main";
import Error from "../../pages/error/Error";
import Services from "../../pages/Services/Services";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import AddService from "../../pages/Services/AddService/AddService";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import ServiceDetails from "../../pages/Services/ServiceDetails/ServiceDetails";
import Profile from "../../pages/Profile/Profile";
import DashboardLayout from "../../layout/Dashboard/DashboardLayout";
import Orders from "../../pages/Orders/Orders";
import MyReviews from "../../pages/reviews/Myreviews/MyReviews";
import PrivateRoute from "../privateRoute/PrivateRoute";


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
                loader: () => fetch("http://localhost:5000/services"),
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
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
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
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
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Profile></Profile>,
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>,
            },
            {
                path: '/dashboard/orders',
                element: <Orders></Orders>,
            },
            {
                path: '/dashboard/myreviews',
                element: <MyReviews></MyReviews>,
                
            },
        ]
    }
])