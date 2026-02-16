import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isDark = isHome ? true : theme === "dark";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleStorage = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    const observer = new MutationObserver(() => {
      setTheme(localStorage.getItem("theme") || "dark");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleProtectedClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate("/login");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const theme = localStorage.getItem("theme");
    localStorage.clear();
    if (theme) localStorage.setItem("theme", theme);
    navigate("/");
  };

  const linkClass = `text-sm cursor-pointer hover:text-purple-600 transition-colors duration-300 ${
    isDark ? "text-gray-400" : "text-gray-500"
  }`;

  return (
    <div
      className={`flex items-center pb-1 relative transition-colors duration-300 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="w-1/2 pt-5">
        <img className="w-33 h-8.25 relative left-41" src={logo} alt="Logo" />
      </div>

      <div className="w-1/2 pt-5 flex justify-end gap-5 items-center">
        <Link to="/" className={linkClass}>
          Home
        </Link>

        <Link
          to="/dashboard"
          onClick={handleProtectedClick}
          className={linkClass}
        >
          Dashboard
        </Link>

        <Link to="/users" onClick={handleProtectedClick} className={linkClass}>
          Users
        </Link>

        <Link
          to="/settings"
          onClick={handleProtectedClick}
          className={linkClass}
        >
          Settings
        </Link>

        <Link to="/login" className={linkClass}>
          Login
        </Link>

        <a
          href="#"
          onClick={handleLogout}
          className={`text-sm cursor-pointer hover:text-red-600 transition-colors duration-300 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Logout
        </a>

        <Link
          to="/download"
          className="px-5 py-3 rounded-[5px] text-white cursor-pointer bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition whitespace-nowrap"
        >
          Download Template
        </Link>

        <div className="relative mr-30" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] rounded transition-all duration-300 ${isDark ? "bg-gray-400" : "bg-gray-500"} ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] rounded transition-all duration-300 ${isDark ? "bg-gray-400" : "bg-gray-500"} ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] rounded transition-all duration-300 ${isDark ? "bg-gray-400" : "bg-gray-500"} ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>

          {menuOpen && (
            <div
              className={`absolute right-0 top-12 w-52 rounded-xl shadow-xl border py-2 z-50 flex flex-col transition-colors duration-300 ${
                isDark
                  ? "bg-[#1E1E24] border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              {[
                { to: "/pricing", label: "Pricing" },
                { to: "/testimonails", label: "Testimonials" },
                { to: "/help", label: "Help" },
                { to: "/more-sections", label: "More Sections" },
                { to: "/questions", label: "Questions" },
                { to: "/coming-soon", label: "Coming Soon" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={`px-5 py-2.5 text-sm hover:text-purple-600 transition-colors duration-300 ${
                    isDark
                      ? "text-gray-400 hover:bg-purple-900/20"
                      : "text-gray-600 hover:bg-purple-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

