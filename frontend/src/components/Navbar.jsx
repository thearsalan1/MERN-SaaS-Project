import React from "react";
import { Link } from "react-router-dom"; // import Link
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center">
      {/* Left side: Logo */}
      <div className="w-1/2 pt-5">
        <img className="w-33 h-8.25 relative left-41" src={logo} alt="Logo" />
      </div>

      {/* Right side: Navigation links */}
      <div className="w-1/2 pt-5 flex justify-end gap-5 items-center">
        <Link
          to="/"
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-600 transition"
        >
          Home
        </Link>
        <Link
          to="/pricing"
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-600 transition"
        >
          Pricing
        </Link>
        <Link
          to="/testimonails"
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-600 transition"
        >
          Testimonials
        </Link>
        <Link
          to="/help"
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-600 transition"
        >
          Help
        </Link>
        <Link
          to="/login"
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-600 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-sm text-gray-400 cursor-pointer hover:text-purple-600 transition"
        >
          Register
        </Link>

        {/* New Logout link */}
        <Link
          to="/logout"
          className="text-sm text-gray-400 cursor-pointer hover:text-red-600 transition"
        >
          Logout
        </Link>

        {/* Gradient button with hover effect */}
        <Link
          to="/download"
          className="px-5 py-3 rounded-[5px] text-white cursor-pointer bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition mr-30 whitespace-nowrap"
        >
          Download Template
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
