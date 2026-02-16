import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import ellipse from "../assets/Ellipse1.png";
import ellipse3 from "../assets/Ellipse3.png";
import ellipse4 from "../assets/Ellipse4.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { users, loading, error } = useContext(UserContext);

  if (loading)
    return (
      <div className="min-h-screen bg-white dark:bg-[#18181C] flex items-center justify-center transition-colors duration-300">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8054FF]"></div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-white dark:bg-[#18181C] flex items-center justify-center transition-colors duration-300">
        <div className="p-12 bg-red-500/10 text-red-300 rounded-3xl max-w-md mx-auto border border-red-500/30">
          Error loading users: {error}
        </div>
      </div>
    );

  const uniqueCities = new Set(users.map((u) => u.address.city)).size;
  const uniqueCompanies = new Set(users.map((u) => u.company.name)).size;
  const gwenboroughUsers = users.filter(
    (u) => u.address.city === "Gwenborough",
  ).length;

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#18181C] transition-colors duration-300">
      {/* Decorative ellipses */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <img src={ellipse} alt="" className="w-32" />
      </div>
      <div className="absolute top-[400px] left-[65%] opacity-10 pointer-events-none">
        <img src={ellipse3} alt="" className="w-24" />
      </div>
      <div className="absolute bottom-24 right-12 opacity-10 pointer-events-none">
        <img src={ellipse4} alt="" className="w-20" />
      </div>

      <div className="relative z-10 w-[80%] mx-auto py-24">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-[50%] text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white font-poppins leading-tight transition-colors duration-300">
              Dashboard{" "}
              <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-gray-500 dark:text-[#9E9E9E] text-lg mt-5 font-light transition-colors duration-300">
              Monitor your user statistics with real-time analytics
            </p>
          </div>
          <Link
            to="/users"
            className="mt-10 px-7 py-3 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition font-poppins font-semibold"
          >
            📊 View All Users
          </Link>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Total Users */}
          <div className="group bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-10 hover:border-[#FF9898]/50 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-[#9E9E9E] uppercase tracking-wider mb-4 font-poppins transition-colors duration-300">
                  Total Users
                </p>
                <p className="text-6xl font-bold font-poppins bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                  {users.length}
                </p>
              </div>
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">👥</span>
              </div>
            </div>
          </div>

          {/* Unique Cities */}
          <div className="group bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-10 hover:border-emerald-400/50 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-[#9E9E9E] uppercase tracking-wider mb-4 font-poppins transition-colors duration-300">
                  Unique Cities
                </p>
                <p className="text-6xl font-bold font-poppins bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  {uniqueCities}
                </p>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🏙️</span>
              </div>
            </div>
          </div>

          {/* Companies */}
          <div className="group bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-10 hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 dark:text-[#9E9E9E] uppercase tracking-wider mb-4 font-poppins transition-colors duration-300">
                  Companies
                </p>
                <p className="text-6xl font-bold font-poppins bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {uniqueCompanies}
                </p>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🏢</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Gwenborough Banner — same gradient on both themes */}
          <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-3xl flex items-center justify-between py-10 px-12">
            <div>
              <p className="text-white text-xl mb-3">Gwenborough</p>
              <h2 className="text-white text-5xl font-bold font-poppins leading-tight">
                {gwenboroughUsers} Local
                <br />
                Users Found
              </h2>
              <button className="mt-8 px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/80 transition font-poppins">
                View Details
              </button>
            </div>
            <span className="text-7xl opacity-80 shrink-0">🏠</span>
          </div>

          {/* Sample Data Preview */}
          <div className="bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-10 transition-colors duration-300">
            <h3 className="font-poppins font-bold text-3xl mb-8 text-gray-900 dark:text-white transition-colors duration-300">
              Sample{" "}
              <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                Data Preview
              </span>
            </h3>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-[#FF9898]/15 to-[#8054FF]/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#FF9898]/40 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-[#9E9E9E] font-medium font-poppins transition-colors duration-300">
                    City
                  </span>
                  <span className="font-bold text-xl font-poppins text-gray-900 dark:text-white transition-colors duration-300">
                    {users[0]?.address.city}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-emerald-400/40 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-[#9E9E9E] font-medium font-poppins transition-colors duration-300">
                    Company
                  </span>
                  <span className="font-bold text-xl font-poppins text-gray-900 dark:text-white truncate max-w-[60%] transition-colors duration-300">
                    {users[0]?.company.name}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 dark:text-[#9E9E9E] font-medium font-poppins transition-colors duration-300">
                    Email
                  </span>
                  <span className="font-bold text-xl font-poppins text-gray-900 dark:text-white truncate max-w-[60%] transition-colors duration-300">
                    {users[0]?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
