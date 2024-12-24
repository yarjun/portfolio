import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Interests from './components/Interests';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Interests" element={<Interests />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
