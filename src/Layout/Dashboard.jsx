import { FaCartPlus, FaHome, FaMusic, FaStackOverflow, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-indigo-400">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/studentHome'><FaHome></FaHome>Student Home</NavLink></li>
                        <li><NavLink to="/dashboard/mycart"><FaCartPlus></FaCartPlus>My Selected Classes</NavLink></li>
                        <li><NavLink to="/dashboard/myEnrolledClass"><FaStackOverflow></FaStackOverflow>My Enrolled Classes</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/classes'><FaMusic></FaMusic>Classes</NavLink></li>
                        <li><NavLink to='/instructors'><FaUsers></FaUsers>Instructors</NavLink></li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;