import Profile from "./Profile";
import Profile1 from "./Profile1";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddClassPopup from './AddClassPopup.js';
import RemoveClassPopup from './RemoveClassPopup.js';
import SessionChangePopup from './SessionChangePopup.js';
import SortBy from './SortBy.js'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      <Routes>
        <Route path="/Profile1" element={<Profile1/>} />
      </Routes>
    </BrowserRouter>
    <p>
    <AddClassPopup />
  </p>
  <p>
    <RemoveClassPopup />
  </p>
  <p>
    <SessionChangePopup />
  </p>
  <p>
    <SortBy />
  </p>
  );
}

export default App;
