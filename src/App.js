import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
