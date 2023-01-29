import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Main from "../../layout/Main/Main";
import Error from "../../pages/error/Error";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    },
])