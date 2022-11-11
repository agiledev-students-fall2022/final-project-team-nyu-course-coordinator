import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import Auth from "./Components/Auth/Auth";
import Courses from "./Components/Courses/Courses";
import Menu from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";

const App = props => {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App
