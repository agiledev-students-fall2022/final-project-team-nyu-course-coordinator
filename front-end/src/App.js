import Profile from "./Profile";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EditCart from './edit-cart'
import SortCart from './sort-cart'
import FilterCart from './filter-cart'
import Login from "./Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddClassPopup from './AddClassPopup.js';
import RemoveClassPopup from './RemoveClassPopup.js';
import SessionChangePopup from './SessionChangePopup.js';
import SortBy from './SortBy.js'



const App = props => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      <Routes>
        <Route path="/Profile" element={<Profile/>} />

        <Route path="/EditCart" element={<EditCart />} />
        <Route path="/SortCart" element={<SortCart />} />
        <Route path="/FilterCart" element={<FilterCart />} />
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

export default App
