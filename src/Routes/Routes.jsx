import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);
