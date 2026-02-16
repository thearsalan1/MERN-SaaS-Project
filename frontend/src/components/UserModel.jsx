import React from "react";

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="bg-white dark:bg-[#1E1E24] rounded-3xl p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-white/10 shadow-2xl transition-colors duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 dark:text-white transition-colors duration-300">
            {user.name.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
              {user.name.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-[5px] text-white bg-black hover:bg-black/70 transition font-poppins text-sm font-semibold flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close
          </button>
        </div>

        {/* Details */}
        <div className="space-y-4">
          {/* Contact row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="p-6 bg-gradient-to-r from-[#FF9898]/15 to-[#8054FF]/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-[#FF9898]/40 transition-all duration-300">
              <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider flex items-center gap-2 mb-3 transition-colors duration-300">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email
              </span>
              <span className="text-gray-900 dark:text-white font-bold font-poppins break-all text-base transition-colors duration-300">
                {user.email}
              </span>
            </div>

            {/* Phone */}
            <div className="p-6 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-emerald-400/40 transition-all duration-300">
              <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider flex items-center gap-2 mb-3 transition-colors duration-300">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone
              </span>
              <span className="text-gray-900 dark:text-white font-bold font-poppins text-base transition-colors duration-300">
                {user.phone}
              </span>
            </div>
          </div>

          {/* Address Banner — same gradient on both themes */}
          <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-3xl flex items-center justify-between py-8 px-10">
            <div>
              <p className="text-white text-sm uppercase tracking-wider mb-2 opacity-80">
                Location
              </p>
              <h3 className="text-white text-2xl font-bold font-poppins">
                {user.address.city}
              </h3>
              <p className="text-white/80 font-poppins mt-1">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-white/80 font-poppins">
                ZIP: {user.address.zipcode}
              </p>
            </div>
            <span className="text-6xl opacity-80 shrink-0">📍</span>
          </div>

          {/* Company */}
          <div className="p-6 bg-gray-50 dark:bg-[#18181C] rounded-2xl border border-gray-200 dark:border-white/10 hover:border-purple-400/40 transition-all duration-300">
            <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider flex items-center gap-2 mb-4 transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Company
            </span>
            <p className="text-gray-900 dark:text-white text-2xl font-bold font-poppins mb-2 transition-colors duration-300">
              {user.company.name}
            </p>
            <p className="text-gray-500 dark:text-[#9E9E9E] font-poppins italic mb-1 transition-colors duration-300">
              "{user.company.catchPhrase}"
            </p>
            <p className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm transition-colors duration-300">
              {user.company.bs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
