import { FaGuitar, FaMusic } from "react-icons/fa";
const NavBar = () => {
    const navElements = <>
        <li><a>Home</a></li>
        <li><a>Parent</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navElements}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"> <FaGuitar className="text-indigo-600"></FaGuitar><span className="text-green-600 font-bold space-x-0">M</span>elody<span className="text-green-600 font-bold space-x-0">T</span>une <FaMusic className="text-indigo-600"></FaMusic></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navElements}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default NavBar;