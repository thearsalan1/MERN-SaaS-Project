import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import ellipse from "../assets/Ellipse1.png";
import ellipse3 from "../assets/Ellipse3.png";

const Users = () => {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortDir, setSortDir] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewMode, setViewMode] = useState("table");
  const PAGE_SIZE = 6;

  const filtered = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) =>
      sortDir === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const displayed = filtered.slice(startIdx, startIdx + PAGE_SIZE);

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

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#18181C] transition-colors duration-300">
      {/* Decorative ellipses */}
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none">
        <img src={ellipse} alt="" className="w-32" />
      </div>
      <div className="absolute top-[400px] left-[65%] opacity-10 pointer-events-none">
        <img src={ellipse3} alt="" className="w-24" />
      </div>

      <div className="relative z-10 w-[80%] mx-auto py-24">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-[50%] text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white font-poppins leading-tight transition-colors duration-300">
              Users{" "}
              <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-gray-500 dark:text-[#9E9E9E] text-lg mt-5 font-light transition-colors duration-300">
              Manage and explore all registered users
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-8 mb-10 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-5 py-4 bg-white dark:bg-[#18181C] border border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white font-poppins placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#8054FF]/60 focus:ring-2 focus:ring-[#8054FF]/20 transition-all duration-300"
              />
            </div>

            <div className="flex gap-4">
              {/* Sort button */}
              <button
                onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
                className="px-7 py-3 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition font-poppins font-semibold whitespace-nowrap"
              >
                Sort {sortDir === "asc" ? "Z→A" : "A→Z"}
              </button>

              {/* View toggle */}
              <button
                onClick={() =>
                  setViewMode(viewMode === "table" ? "cards" : "table")
                }
                className="px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/70 transition font-poppins font-semibold whitespace-nowrap border border-white/10"
              >
                {viewMode === "table" ? "Card View" : "Table View"}
              </button>
            </div>
          </div>

          <p className="text-gray-500 dark:text-[#9E9E9E] font-poppins mt-5 text-sm uppercase tracking-wider transition-colors duration-300">
            Showing{" "}
            <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">
              {displayed.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">
              {filtered.length}
            </span>{" "}
            users
          </p>
        </div>

        {/* Table View */}
        {viewMode === "table" ? (
          <div className="bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden transition-colors duration-300">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200 dark:bg-[#18181C] border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
                    {[
                      "Name",
                      "Email",
                      "Phone",
                      "City",
                      "Company",
                      "Actions",
                    ].map((col) => (
                      <th
                        key={col}
                        className="p-5 text-left text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider last:text-center transition-colors duration-300"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {displayed.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-200 dark:hover:bg-[#18181C] transition-all duration-200"
                    >
                      <td className="p-5 text-gray-900 dark:text-white font-poppins font-medium transition-colors duration-300">
                        {user.name}
                      </td>
                      <td className="p-5 text-gray-500 dark:text-[#9E9E9E] font-poppins truncate max-w-[180px] transition-colors duration-300">
                        {user.email}
                      </td>
                      <td className="p-5 text-gray-500 dark:text-[#9E9E9E] font-poppins transition-colors duration-300">
                        {user.phone}
                      </td>
                      <td className="p-5 text-gray-900 dark:text-white font-poppins transition-colors duration-300">
                        {user.address.city}
                      </td>
                      <td className="p-5 text-gray-900 dark:text-white font-poppins transition-colors duration-300">
                        {user.company.name}
                      </td>
                      <td className="p-5 text-center">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="px-5 py-2 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition font-poppins font-semibold text-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Card View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((user) => (
              <div
                key={user.id}
                className="group bg-gray-100 dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:border-[#FF9898]/40 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF9898] to-[#8054FF] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold font-poppins text-lg">
                    {user.name.charAt(0)}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white font-poppins mb-1 transition-colors duration-300">
                  {user.name}
                </h2>
                <p className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm mb-4 truncate transition-colors duration-300">
                  {user.email}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-[#9E9E9E] text-xs uppercase tracking-wider font-poppins transition-colors duration-300">
                      City
                    </span>
                    <span className="text-gray-900 dark:text-white text-sm font-poppins font-medium transition-colors duration-300">
                      {user.address.city}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-[#9E9E9E] text-xs uppercase tracking-wider font-poppins transition-colors duration-300">
                      Company
                    </span>
                    <span className="text-gray-900 dark:text-white text-sm font-poppins font-medium truncate max-w-[55%] transition-colors duration-300">
                      {user.company.name}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedUser(user)}
                  className="w-full px-5 py-2.5 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 transition font-poppins font-semibold text-sm"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/70 border border-white/10 transition font-poppins font-semibold disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider px-4 transition-colors duration-300">
              Page{" "}
              <span className="text-gray-900 dark:text-white font-bold transition-colors duration-300">
                {currentPage}
              </span>{" "}
              of{" "}
              <span className="text-gray-900 dark:text-white font-bold transition-colors duration-300">
                {totalPages}
              </span>
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/70 border border-white/10 transition font-poppins font-semibold disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {/* User Detail Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-white dark:bg-[#1E1E24] border border-gray-200 dark:border-white/10 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden transition-colors duration-300">
              {/* Modal header — gradient banner, same on both themes */}
              <div className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] p-8 flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">User Profile</p>
                  <h2 className="text-3xl font-bold text-white font-poppins">
                    {selectedUser.name}
                  </h2>
                </div>
                <div className="w-16 h-16 bg-black/30 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-white font-bold font-poppins text-2xl">
                    {selectedUser.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Modal body */}
              <div className="p-8 space-y-4">
                {[
                  { label: "Email", value: selectedUser.email },
                  { label: "Phone", value: selectedUser.phone },
                  { label: "City", value: selectedUser.address.city },
                  { label: "Company", value: selectedUser.company.name },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center p-4 bg-gray-100 dark:bg-[#18181C] rounded-2xl border border-gray-200 dark:border-white/5 transition-colors duration-300"
                  >
                    <span className="text-gray-500 dark:text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider transition-colors duration-300">
                      {label}
                    </span>
                    <span className="text-gray-900 dark:text-white font-poppins font-medium truncate max-w-[60%] transition-colors duration-300">
                      {value}
                    </span>
                  </div>
                ))}

                <button
                  onClick={() => setSelectedUser(null)}
                  className="w-full mt-2 px-7 py-3 rounded-[5px] text-white bg-black hover:bg-black/70 border border-white/10 transition font-poppins font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
