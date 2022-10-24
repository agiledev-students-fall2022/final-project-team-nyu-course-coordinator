import Profile from "./Profile";
import Profile1 from "./Profile1";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
      <Routes>
        <Route path="/Profile1" element={<Profile1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
