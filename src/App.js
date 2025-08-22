import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PrayerRequest from "./pages/PrayerRequest";
import RequestHelp from "./pages/RequestHelp";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Bishop of Rome</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/prayer">Prayer Requests</Link></li>
          <li><Link to="/help">Request Help</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prayer" element={<PrayerRequest />} />
        <Route path="/help" element={<RequestHelp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;