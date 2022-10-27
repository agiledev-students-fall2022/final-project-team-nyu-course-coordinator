import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import Profile from "./Profile";
import EditCart from './edit-cart'
import SortCart from './sort-cart'
import FilterCart from './filter-cart'
import Login from "./Login"
import AllClasses from "./AllClasses";
import MySchedule from "./MySchedule";
import ChangeSession from "./change-session.js"

const App = props => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/EditCart" element={<EditCart />} /> 
        <Route path="/SortCart" element={<SortCart />} />
        <Route path="/FilterCart" element={<FilterCart />} />
        <Route path="/AllClasses" element={<AllClasses />} />
        <Route path="/MySchedule" element={<MySchedule />} />
        <Route path="/edit-cart.js" element={<EditCart />} />
        <Route path="/change-session.js" element={<ChangeSession />} />

      </Routes>
    </BrowserRouter>
 
  );
}

export default App
