import { FaCartPlus, FaHome, FaMusic, FaStackOverflow, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
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
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <p className="md:flex md:items-center">
                                <span><FaMusic className="text-lime-500 text-3xl"></FaMusic></span>
                                <span className="text-xs md:text-base">
                                    <span className="text-indigo-500 font-bold text-2xl ml-1">M</span>elody
                                    <span className="text-pink-500 font-bold text-2xl">T</span>une
                                </span>
                            </p>
                        </Link>
                        <div className="divider"></div>
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/studentHome'><FaHome></FaHome>Student Home</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/mycart"><FaCartPlus></FaCartPlus>
                                My Selected Classes
                                <span className="badge badge-secondary badge-outline">+{cart?.length || 0}</span>
                            </NavLink>
                        </li>
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