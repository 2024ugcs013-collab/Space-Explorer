import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Missions from "./pages/Missions";
import Community from "./pages/Community";
function App() {
  return (
    <>
    <Navbar />   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/community" element={<Community />} />
    </Routes>
    </>
  );
}

export default App;
