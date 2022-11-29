import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Auth from "./Components/Auth/Auth";
import Courses from "./Components/Courses/Courses";
import Menu from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Schedule from "./Components/Schedule/Schedule";
import AuthBar from "./Components/AuthBar/AuthBar";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { expect } from 'chai';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <GoogleOAuthProvider clientId="261702453032-hhor34vsg5ufh7bnn99upoi5ph6e980v.apps.googleusercontent.com">
      <BrowserRouter>
      <Menu />
      <AuthBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </BrowserRouter> 
    </GoogleOAuthProvider>
  );
}

// unit tests

expect(App).to.be.a('function');



//(!user ? <Auth /> : <Navigate replace to="/courses" />)}

export default App
