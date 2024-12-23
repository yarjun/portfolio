import React, { useState, useEffect } from 'react';
import './About.css';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import ProfileImage from '../assets/images/Image.jpeg';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff5733',
      contrastText: '#fff',
    },
  },
});

const AnimatedButton = styled(motion(Button))(({ theme }) => ({
  padding: theme.spacing(1, 3.5),
  fontSize: '1rem',
}));

function About() {
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

  return (
    <about-me>
      <ThemeProvider theme={theme}>
        <section id="about" className="about-section">
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
                <span className='intro-message2'></span>
                <AnimatePresence mode="wait" initial={false} >
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
                  <AnimatedButton
                    component="a"
                    href="/resume.pdf"
                    target="_blank"
                    variant="contained"
                    color="primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Resume
                  </AnimatedButton>
                  <AnimatedButton
                    component="a"
                    href="/contact"
                    variant="contained"
                    color="secondary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Contact
                  </AnimatedButton>
                </Box>
              </div>
            </div>
            <div className="about-image">
              <Image 
                src={ProfileImage} 
                alt="Your Profile" 
                roundedCircle 
                fluid 
                style={{ 
                  width: '380px', // Adjust the size as needed
                  height: '550px', 
                  objectFit: 'cover' 
                }} 
              />
            </div>
          </div>
          <div className="about-container social">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {/* <h3 style={{ margin: 0, color: "#007BFF" }}>Social : </h3> */}
              <a href="https://www.linkedin.com/in/arjun-yadav-638ab6165/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} color="#0e76a8" />
              </a>
              <a href="https://github.com/yarjun" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} color="#333" />
              </a>
              <a href="https://www.instagram.com/iarjunydv97/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} color="#E4405F" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} color="#1877F2" />
              </a>
            </Box>
          </div>
        </section>
      </ThemeProvider>
    </about-me>
  );
}

export default About;
