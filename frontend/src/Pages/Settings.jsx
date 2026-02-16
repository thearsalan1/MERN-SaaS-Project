import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme.jsx";
import ellipse from "../assets/Ellipse1.png";
import ellipse3 from "../assets/Ellipse3.png";

const Settings = () => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved ? JSON.parse(saved) : { name: "", email: "" };
  });
  const { theme, toggleTheme } = useTheme();

  const handleProfileChange = (e) => {
    const updated = { ...profile, [e.target.name]: e.target.value };
    setProfile(updated);
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile settings saved!");
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#18181C] transition-colors duration-300">
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <img src={ellipse} alt="" className="w-32" />
      </div>
      <div className="absolute top-[500px] left-[70%] opacity-10 pointer-events-none">
        <img src={ellipse3} alt="" className="w-24" />
      </div>

      <div className="relative z-10 w-[80%] mx-auto py-24">
        <div className="flex flex-col items-center mb-20">
          <div className="w-[50%] text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white font-poppins leading-tight transition-colors duration-300">
              Account{" "}
              <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                Settings
              </span>
            </h1>
            <p className="text-gray-500 dark:text-[#9E9E9E] text-lg mt-5 font-light transition-colors duration-300">
              Customize your profile and preferences
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-10 transition-colors duration-300">
            <h3 className="font-poppins font-bold text-3xl text-gray-900 dark:text-white mb-8 transition-colors duration-300">
              Profile{" "}
              <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                Settings
              </span>
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-500 dark:text-[#9E9E9E] font-poppins font-medium text-sm uppercase tracking-wider mb-3 transition-colors duration-300">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full px-5 py-4 bg-white dark:bg-[#18181C] border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white font-poppins placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#8054FF]/60 focus:ring-2 focus:ring-[#8054FF]/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-500 dark:text-[#9E9E9E] font-poppins font-medium text-sm uppercase tracking-wider mb-3 transition-colors duration-300">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full px-5 py-4 bg-white dark:bg-[#18181C] border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white font-poppins placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#8054FF]/60 focus:ring-2 focus:ring-[#8054FF]/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <button
                onClick={handleSave}
                className="w-full px-7 py-3 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition font-poppins font-semibold text-base mt-2"
              >
                Save Profile
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-3xl p-10 flex items-center justify-between">
              <div>
                <p className="text-white text-xl mb-3">Appearance</p>
                <h2 className="text-white text-4xl font-bold font-poppins leading-tight">
                  Dark / Light
                  <br />
                  Mode
                </h2>
                <button
                  onClick={toggleTheme}
                  className="mt-8 px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/80 transition font-poppins font-semibold"
                >
                  {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
              </div>
              <span className="text-7xl opacity-80 shrink-0">
                {theme === "dark" ? "🌙" : "☀️"}
              </span>
            </div>

            <div className="bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-10 flex-1 transition-colors duration-300">
              <h3 className="font-poppins font-bold text-3xl text-gray-900 dark:text-white mb-8 transition-colors duration-300">
                Quick{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Info
                </span>
              </h3>
              <div className="space-y-4">
                <div className="p-5 bg-gradient-to-r from-[#FF9898]/15 to-[#8054FF]/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#FF9898]/40 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider transition-colors duration-300">
                      Current Theme
                    </span>
                    <span className="text-gray-900 dark:text-white font-bold font-poppins capitalize transition-colors duration-300">
                      {theme}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider transition-colors duration-300">
                      Name
                    </span>
                    <span className="text-gray-900 dark:text-white font-bold font-poppins truncate max-w-[60%] transition-colors duration-300">
                      {profile.name || "—"}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider transition-colors duration-300">
                      Email
                    </span>
                    <span className="text-gray-900 dark:text-white font-bold font-poppins truncate max-w-[60%] transition-colors duration-300">
                      {profile.email || "—"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
