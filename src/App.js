import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";
import Contact from './Contact';
import About from "./About";
import Home from "./Home"


function App() {
  return (
    <Router>
    <nav>
      <Link to="/About" className='Link'>About</Link>
      <Link to="/Home" className='Link'>Home</Link>
      <Link to="/Contact" className='Link'>Contact</Link>
    </nav>
    <Routes>
      <Route path="/About" element={<About/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </Router>
  );
}

export default App;
