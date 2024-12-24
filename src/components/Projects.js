import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3 } from 'react-icons/fa'; // Importing technology icons
import first from '../assets/images/first.png';
import second from '../assets/images/second.png';
import third from '../assets/images/third.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      date: 'Dec 2024',
      description: [
        'Developed a responsive React-based Food Ordering Platform to streamline the ordering process for users and restaurant owners.',
        'Conducted thorough testing and debugging to identify and resolve UI issues, ensuring a polished and error-free user interface.',
      ],
      technologies: [<FaReact />, <FaHtml5 />, <FaCss3 />], // Add relevant technology icons
      images: [first, second, third],
      github: 'https://github.com/your-repo1',
      live: 'https://your-live-website1.com',
    },
    {
      id: 2,
      title: 'Food Order Application',
      date: 'Sep 2023-Oct 2023',
      description: [
        'Developed a responsive React-based Food Ordering Platform to streamline the ordering process for users and restaurant owners.',
        'Conducted thorough testing and debugging to identify and resolve UI issues, ensuring a polished and error-free user interface.',
      ],
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />], // Add relevant technology icons
      images: [first, second, third],
      github: 'https://github.com/your-repo2',
      live: 'https://your-live-website2.com',
    },
    {
      id: 3,
      title: 'Socket.IO — Chatting Application',
      date: 'Sep 2017-Dec 2017',
      description: [
        'Developed a real-time Chatting Application using Node.js, Socket.io, and the Express framework to facilitate instant communication between users.',
        'Improved system responsiveness by 50%, resulting in a seamless user experience and a 20% increase in active user retention.',
      ],
      technologies: [<FaNodeJs />, <FaReact />], // Add relevant technology icons
      images: [first, second, third],
      github: 'https://github.com/your-repo3',
      live: 'https://your-live-website1.com',
    },
    {
      id: 4,
      title: 'Blog Application',
      date: 'Jun 2016-Sep 2016',
      description: [
        'Developed a robust Blog Application using Node.js, MongoDB, and the Express framework to provide a platform for users to create, edit, and share blog posts.',
        'Implemented a REST API to handle CRUD operations for blog posts using the Express framework.',
      ],
      technologies: [<FaNodeJs />, <FaDatabase />], // Add relevant technology icons
      images: [first, second, third],
      github: 'https://github.com/your-repo4',
      live: 'https://your-live-website4.com',
    }
  ];

  return (
    <div className="projects-container">
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
              {project.live && (
                <a
                  href={project.live}
                  className="project-link project-link-live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              )}
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