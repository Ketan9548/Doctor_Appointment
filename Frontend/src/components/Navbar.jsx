import { useState } from "react";
import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [showmenu, setShowmenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className="flex items-center fixed justify-between text-base py-4 px-6 md:px-12 lg:px-20 mb-5 border-b border-gray-300 shadow-md bg-white top-0 left-0 w-full z-50">
            {/* Logo */}
            <img
                className="w-24 h-24 cursor-pointer hover:scale-110 transition-transform duration-300"
                src={assets.logo}
                onClick={() => { navigate("/"); scrollTo(0, 0) }}
                alt="Logo"
            />

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-8 items-center font-medium text-gray-700">
                {[
                    { name: "Home", path: "/" },
                    { name: "All Doctors", path: "/alldoctor" },
                    { name: "About", path: "/about" },
                    { name: "Contact", path: "/contact" }
                ].map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => `relative py-1 transition duration-300 ${isActive ? "text-blue-600" : "hover:text-blue-600"}`}
                    >
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
                    </NavLink>
                ))}
            </ul>

            {/* Profile & Login Section */}
            <div className="flex items-center gap-6">
                {token ? (
                    <div className="relative group cursor-pointer">
                        {/* Profile Image */}
                        <div className="flex items-center gap-2">
                            <img className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-lg" src={assets.profile_pic} alt="Profile" />
                            <img className="w-4 transition-transform duration-300 group-hover:rotate-180" src={assets.dropdown_icon} alt="Dropdown" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-48 py-2 text-gray-700 opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-50 border border-gray-200">
                            <p onClick={() => navigate("/my-profile")} className="px-4 py-3 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition rounded-t-lg">My Profile</p>
                            <p onClick={() => navigate("/my-appointment")} className="px-4 py-3 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition">My Appointment</p>
                            <p onClick={() => setToken(false)} className="px-4 py-3 text-red-500 hover:bg-red-100 cursor-pointer transition rounded-b-lg">Logout</p>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => { navigate("/login"); scrollTo(0, 0) }}
                        className="bg-blue-500 text-white px-6 py-2 cursor-pointer rounded-full shadow-lg hover:bg-blue-600 transition duration-300 hidden md:block"
                    >
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;