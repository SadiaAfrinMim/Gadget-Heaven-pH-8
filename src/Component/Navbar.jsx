import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
    const { pathname } = useLocation();

    const link = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-2 font-bold rounded-lg transition-colors duration-300 ${
                            isActive
                                ? 'bg-[#9538E2] text-white border border-white'
                                : `${pathname === '/' ? 'text-white' : 'text-black'} hover:bg-[#9538E2] hover:text-white`
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistic"
                    className={({ isActive }) =>
                        `px-4 py-2 font-bold rounded-lg transition-colors duration-300 ${
                            isActive
                                ? 'bg-[#9538E2] text-white border border-purple-700'
                                : `${pathname === '/' ? 'text-white' : 'text-black'} hover:bg-[#9538E2] hover:text-white`
                        }`
                    }
                >
                    Statistic
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `px-4 py-2 font-bold rounded-lg transition-colors duration-300 ${
                            isActive
                                ? 'bg-[#9538E2] text-white border border-purple-700'
                                : `${pathname === '/' ? 'text-white' : 'text-black'} hover:bg-[#9538E2] hover:text-white`
                        }`
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-4 py-2 font-bold rounded-lg transition-colors duration-300 ${
                            isActive
                                ? 'bg-[#9538E2] text-white border border-purple-500'
                                : `${pathname === '/' ? 'text-white' : 'text-black'} hover:bg-[#9538E2] hover:text-white`
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="w-full flex justify-center fixed top-0 z-50">
            <div
                className={`w-11/12 mx-auto flex justify-between items-center rounded-b-lg ${
                    pathname === '/' ? 'bg-[#9538E2] text-white' : 'bg-white border border-gray-300'
                }`}
            >
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {link}
                            </ul>
                        </div>
                        <a className={`${pathname === '/' ? 'text-white' : 'text-black'} text-xl font-bold`}>Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-4">{link}</ul>
                    </div>
                    <div className="navbar-end gap-4">
                        <IoCart className={`w-10 h-10 text-xl rounded-full border-2 p-2 ${pathname === '/' ? 'border-white text-white' : 'border-black text-black'}`} />
                        <GiSelfLove className={`w-10 h-10 text-xl rounded-full border-2 p-2 ${pathname === '/' ? 'border-white text-white' : 'border-black text-black'}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
