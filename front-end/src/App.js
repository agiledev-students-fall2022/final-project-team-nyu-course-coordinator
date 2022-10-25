// import logo from './logo.svg';
import Profile from "./Profile";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
