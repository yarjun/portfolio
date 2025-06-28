import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3 } from 'react-icons/fa'; 
import first from '../assets/images/first.png';
import second from '../assets/images/second.png';
import third from '../assets/images/third.png';
import blog from '../assets/images/blog.png';
import chat from '../assets/images/chat.png';
import portfolio1 from '../assets/images/portfolio1.png';
import portfolio2 from '../assets/images/portfolio2.png';
import portfolio3 from '../assets/images/portfolio3.png';
/*Projects */
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      date: 'Dec 2024',
      description: [
        'Developed a responsive and interactive portfolio website using React.js, integrating libraries like Material-UI and React Router for seamless navigation.',
        'Enhanced user experience with features such as dynamic animations using Lottie, PDF viewing, email services via EmailJS, and geospatial mapping with Leaflet.',
      ],
      technologies: [<FaReact />, <FaHtml5 />, <FaCss3 />],
      images: [portfolio1, portfolio2, portfolio3],
      github: 'https://github.com/yarjun/portfolio',
      live: 'https://github.com/yarjun/portfolio',
    },
    {
      id: 2,
      title: 'Food Order Application',
      date: 'Sep 2023-Nov 2023',
      description: [
        'Developed a responsive React-based Food Ordering Platform to streamline the ordering process for users and restaurant owners.',
        'Conducted thorough testing and debugging to identify and resolve UI issues, ensuring a polished and error-free user interface.',
      ],
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />], 
      images: [first, second, third],
      github: 'https://github.com/yarjun/Food-Order-App',
      live: 'https://food-order-app-one-dun.vercel.app/',
    },
    {
      id: 3,
      title: 'Policy Impact Dashboard (Public Data Analysis Project)',
      date: 'May 2021-Aug 2023',
      description: [
        'Conducted a policy-focused data analysis project to evaluate the impact of India’s rural employment and health schemes (e.g., MGNREGA, Ayushman Bharat) using publicly available datasets from data.gov.in.',
        'Cleaned and transformed raw CSV and JSON datasets using Python (pandas, NumPy); performed statistical analysis to identify regional disparities and trends.',
        'Created data visualizations using Excel (PivotTables, Charts) and Tableau to communicate findings on healthcare access and employment effectiveness to non-technical audiences.',
        'Skills: Policy Research, Data Cleaning, Python, Excel, Tableau, PowerPoint, Public Data Analytics, Impact Evaluation.'
      ],
      technologies: [<FaReact />, <FaDatabase />], 
      images: [blog],
      github: 'https://github.com/yarjun/first-web_dev-full_stack-blog_app-using-nodejs',
      live: 'https://your-live-website4.com',
    },
    {
      id: 4,
      title: 'Socket.IO — Chatting Application',
      date: 'Sep 2017-Dec 2017',
      description: [
        'Developed a real-time Chatting Application using Node.js, Socket.io, and the Express framework to facilitate instant communication between users.',
        'Improved system responsiveness by 50%, resulting in a seamless user experience and a 20% increase in active user retention.',
      ],
      technologies: [<FaNodeJs />, <FaReact />], 
      images: [chat],
      github: 'https://github.com/yarjun/node-course-2-chat-app',
      live: 'https://your-live-website1.com',
    }
    
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1> 
      {projects.map((project, index) => (
        <div
          className={`project-box ${index % 2 === 0 ? 'normal' : 'reverse'}`}
          key={project.id}
        >
          <div className="project-description">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-date">{project.date}</p>
            <ul className="project-description-list">
              {project.description.map((point, idx) => (
                <li key={idx} className="project-description-item">{point}</li>
              ))}
            </ul>
            <div className="project-technologies">
              <h3>Technologies Used:</h3>
              <div className="project-tech-icons">
                {project.technologies.map((icon, idx) => (
                  <div className="tech-icon" key={idx}>{icon}</div>
                ))}
              </div>
            </div>
            <div className="project-buttons">
              <a
                href={project.github}
                className="project-link github"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              {/* {project.live && (
                <a
                  href={project.live}
                  className="project-link project-link-live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )} */}
            </div>
          </div>
          <div className="project-image-container">
            {project.images.length > 0 && (
              <>
                <img
                  src={project.images[0]}
                  alt={`${project.title} - 1`}
                  className="project-image middle"
                />
                {project.images[1] && (
                  <img
                    src={project.images[1]}
                    alt={`${project.title} - 2`}
                    className="project-image left"
                  />
                )}
                {project.images[2] && (
                  <img
                    src={project.images[2]}
                    alt={`${project.title} - 3`}
                    className="project-image right"
                  />
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
