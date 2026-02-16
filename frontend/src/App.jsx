import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import Navbar from "./Components/Navbar";
import ComingSoon from "./Pages/ComingSoon";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import MoreSections from "./Pages/MoreSections";
import Pricing from "./Pages/Pricing";
import Questions from "./Pages/Questions";
import Register from "./Pages/Register";
import Testimonails from "./Pages/Testimonails";
import Dashboard from "./components/Dashboard.jsx";
import Users from "./Pages/User.jsx";
import Settings from "./Pages/Settings.jsx";
import Login from "./Pages/Login.jsx";

const HIDDEN_NAVBAR_ROUTES = ["/register", "/login"];

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = !HIDDEN_NAVBAR_ROUTES.includes(location.pathname);

  return (
    <>
      {showNavbar && (
        <div className="relative z-50">
          <Navbar />
        </div>
      )}
      {children}
    </>
  );
};

function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-sections" element={<MoreSections />} />
          <Route path="/testimonails" element={<Testimonails />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/help" element={<Help />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
}

export default App;
