import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SupportForm from './SupportForm';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, beloved</h1>
      <p className="mb-4">This is a place of hope, prayer, and support. 🙏 Let Love Lead.</p>
      <h2 className="text-xl font-semibold mb-2">Quick Request</h2>
      <SupportForm />
    </div>
  );
}

function About() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">We serve as a bridge of love and mercy, helping the needy and supporting the faithful.</p>
      <SupportForm />
    </div>
  );
}

function GetSupport() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Get Support</h1>
      <p className="mb-4">Submit your prayer or support request below:</p>
      <SupportForm />
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Reach out for guidance, prayer, or assistance.</p>
      <SupportForm />
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/support">Get Support</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<GetSupport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
