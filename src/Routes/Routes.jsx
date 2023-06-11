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
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import InstructorsClass from "../pages/Dashboard/InstructorsClass/InstructorsClass";

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
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'instructorhome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'instructorclasses',
                element: <InstructorRoute><InstructorsClass></InstructorsClass></InstructorRoute>
            },
            {
                path: 'studenthome',
                element: <StudentHome></StudentHome>
            },
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'myEnrolledClass',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
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
