import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

// Page Components
import Home from './Pages/Home/Home';
import Blog from "./Pages/blog/Blog";
import Services from './Pages/services/Services';
import Contact from './Pages/contactus/Contactus';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact  />} />
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;
