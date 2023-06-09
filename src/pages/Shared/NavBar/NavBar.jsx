import { useContext } from "react";
import { FaCartPlus, FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navElements = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>
    return (
        <>
            <div className="navbar bg-purple-200 h-28 shadow rounded my-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navElements}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        <p className="md:flex md:items-center">
                            <span><FaMusic className="text-lime-500 text-3xl"></FaMusic></span>
                            <span className="text-xs md:text-base">
                                <span className="text-indigo-500 font-bold text-2xl ml-1">M</span>elody
                                <span className="text-pink-500 font-bold text-2xl">T</span>une
                            </span>
                        </p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navElements}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <button className="btn btn-ghost md:mr-2">
                                <FaCartPlus className="text-2xl text-indigo-500"></FaCartPlus>
                                <div className="badge badge-secondary badge-outline">+0</div>
                            </button>
                            <div className="avatar mr-2">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} title={user.displayName} />
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline btn-primary">LogOut</button>
                        </> : <>
                            <Link to='/login'><button className="btn btn-outline btn-primary">Login</button></Link>
                        </>
                    }
                </div>
            </div>

        </>
    );
};

export default NavBar;