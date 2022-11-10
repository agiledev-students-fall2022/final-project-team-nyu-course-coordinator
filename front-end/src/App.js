import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/Auth";
import Courses from "./components/Courses/Courses";
import Menu from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Schedule from "./components/Schedule/Schedule";

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
