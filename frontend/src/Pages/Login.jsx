import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#18181C] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#FF9898]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#8054FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white font-poppins leading-tight">
            Welcome{" "}
            <span className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] bg-clip-text text-transparent">
              Back
            </span>
          </h1>
          <p className="text-[#9E9E9E] text-base mt-3 font-light">
            Sign in to your account
          </p>
        </div>

        <div className="bg-[#1E1E24] border border-white/10 rounded-3xl p-10">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full px-5 py-4 bg-[#18181C] border border-white/10 rounded-2xl text-white font-poppins placeholder-white/20 focus:outline-none focus:border-[#8054FF]/60 focus:ring-2 focus:ring-[#8054FF]/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-[#9E9E9E] font-poppins text-sm uppercase tracking-wider mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-5 py-4 bg-[#18181C] border border-white/10 rounded-2xl text-white font-poppins placeholder-white/20 focus:outline-none focus:border-[#8054FF]/60 focus:ring-2 focus:ring-[#8054FF]/20 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-[5px] text-white bg-gradient-to-r from-[#FF9898] to-[#8054FF] hover:opacity-90 active:scale-95 transition-all font-poppins font-semibold text-base mt-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
