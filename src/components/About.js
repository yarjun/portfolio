import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './About.css';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ProfileImage from '../assets/images/Image.jpeg';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const theme = createTheme({
  palette: {
    primary: { main: '#2196f3', contrastText: '#fff' },
    secondary: { main: '#ff5733', contrastText: '#fff' },
  },
});

function About() {
  const [isDaytime, setIsDaytime] = useState(true);
  const [snowColor, setSnowColor] = useState('#fff');
  const [flakeSize, setFlakeSize] = useState(30); // Default size for snowflakes

  //const snowColors = ['#00bfff', '#00bfff', '#ff6347', '#32cd32', '#ff4500']; // Pink, Blue, Tomato, Lime, OrangeRed
  const snowColors = ['#00bfff', '#00bfff'];
  useEffect(() => {
    const currentHour = new Date().getHours();
    setIsDaytime(currentHour >= 0 && currentHour < 0);

    const colorInterval = setInterval(() => {
      setSnowColor(snowColors[Math.floor(Math.random() * snowColors.length)]);
    }, 1000); // Change color every second

    return () => clearInterval(colorInterval);
  }, [snowColors]);

  // Resize effect to adjust snowflake size dynamically
  useEffect(() => {
    const handleResize = () => {
      // Check the window width and adjust the snowflake size accordingly
      if (window.innerWidth <= 768) {
        setFlakeSize(10); // Smaller flakes for mobile view
      } else {
        setFlakeSize(30); // Larger flakes for desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial flake size based on the current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phrases = [
    { greeting: 'Bonjour', word: 'Web Developer' },
    { greeting: 'Hello', word: 'UI/UX Designer' },
    { greeting: 'Namaste', word: 'Software Engineer' },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  const currentPhrase = phrases[currentPhraseIndex];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-me">
      <ThemeProvider theme={theme}>
        <section id="about" className="about-section">
          {isDaytime ? (
            <div className="sunshine">
              <div className="sun"></div>
              <div className="rays"></div>
            </div>
          ) : (
            <Snowfall color={snowColor} flakeSize={flakeSize} />
          )}
          <div className="about-container">
            <div className="about-content">
              <div className="hello-class">
                <hr className="line3" />
                <span className="hello">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currentPhrase.greeting}
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {currentPhrase.greeting}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
              <h1 className="intro">
                I'm <span className="surname">Arjun</span> Yadav
              </h1>
              <h2 className="intro-message">
                I'm a
                <br />
                <span className="intro-message2"></span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={currentPhrase.word}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {currentPhrase.word}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <h4 className="description">
                With a highly creative and collaborative approach to web
                development and design, I'm passionate about exploring new
                technologies, experimenting with cutting-edge techniques, and
                pushing the boundaries of creativity to deliver unique and
                impactful digital solutions.
              </h4>
              <div className="about-actions">
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    component="a"
                    href="/resume.pdf"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Resume
                  </Button>
                  <Button
                    component="a"
                    href="https://leetcode.com/u/Arjun15597/"
                    target="_blank"
                    variant="contained"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      "&:hover": {
                        opacity: 0.8, // Adds the dimming effect
                      },
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SiLeetcode style={{ fontSize: "20px" }} /> Leetcode
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToContact}
                  >
                    Contact
                  </Button>
                </Box>
              </div>
            </div>
            <div className="about-image">
              <Image
                src={ProfileImage}
                alt="Your Profile"
                fluid
                style={{
                  width: '450px',
                  height: '520px',
                  objectFit: 'cover',
                  borderRadius: '50px',
                }}
              />
            </div>
          </div>
          <div className="about-container social">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <a
                href="https://www.linkedin.com/in/arjun-yadav-638ab6165/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color="#0e76a8" />
              </a>
              <a
                href="https://github.com/yarjun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} color="#333" />
              </a>
              <a
                href="https://www.instagram.com/iarjunydv97/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} color="#E4405F" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={32} color="#1877F2" />
              </a>
            </Box>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
}

export default About;
