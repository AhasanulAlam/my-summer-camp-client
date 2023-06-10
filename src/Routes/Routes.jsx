import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'mangeclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
        ]
    }
]);
