import { Routes, Route } from "react-router-dom";
import ComingSoon from "./Pages/ComingSoon";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import MoreSections from "./Pages/MoreSections";
import Pricing from "./Pages/Pricing";
import Questions from "./Pages/Questions";
import Register from "./Pages/Register";
import Testimonails from "./Pages/Testimonails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more-sections" element={<MoreSections />} />
      <Route path="/testimonails" element={<Testimonails />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/help" element={<Help />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
