import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Interests from './components/Interests';
import Footer from './components/Footer'; 

function App() {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= documentHeight) {
      setShowFooter(true); 
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div id="about" className="App-section">
        <About />
      </div>
      <div id="technologies" className="App-section">
        <Technologies />
      </div>
      <div id="experience" className="App-section">
        <Experience />
      </div>
      <div id="projects" className="App-section">
        <Projects />
      </div>
      <div id="certificates" className="App-section">
        <Certificates />
      </div>
      <div id="interests" className="App-section">
        <Interests />
      </div>
      <div id="contact" className="App-section">
        <Contact />
      </div>
      <div id="footer" className="App-section">
        {showFooter && <Footer />} 
      </div>
    </div>
  );
}

export default App;
