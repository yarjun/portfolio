import React, { useState } from 'react';
import './Experience.css';


import concordiaLogo from '../assets/images/concordia.png';
import aitLogo from '../assets/images/Ait.png';
import vajiramLogo from '../assets/images/vajiram.png';
import tcsLogo from '../assets/images/tcs.png';

function Experience() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const experiences = [
    {
      id: 1,
      title: "Master of Science – Applied Computer Science Co-op",
      company: "Concordia University",
      location: "Montreal, QC, Canada",
      dateRange: "Sept 2023 - May 2025",
      description:
        "Relevant Courses: Programming and Problem Solving • Advanced Programming Practices • Software Design Methodologies.",
      logo: concordiaLogo,  
      linkedin: "https://linkedin.com/school/concordia-university/",
    },
    {
      id: 2,
      title: "UPSC - Civil Services",
      company: "Vajiram and Ravi",
      location: "New Delhi, India",
      dateRange: "Apr 2021 - June 2023",
      description:
        "Completed a comprehensive preparation course at Vajiram and Ravi, Delhi, India, one of the premier IAS coaching institutions, focusing on both UPSC -CSE(Prelims and Mains).",
      logo: vajiramLogo,  
      linkedin: "https://vajiramandravi.com/",
    },
    {
      id: 3,
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Gurugram, India",
      dateRange: "Jul 2019 - Apr 2021",
      description:
        "Automation Implementation: Spearheaded the development and deployment of an automated testingframework leveraging AWS services for scalable test execution and data storage.Utilized Docker for containerization and Jenkins for continuous integration and delivery (CI/CD) pipelines.Developed and maintained user interfaces for internal applications using React.js,ensuring a responsive and intuitive user experience. Integrated React components with backend APIs(Node.js) to facilitate seamless data flow and interaction.Conducted thorough root cause analysis and resolution of complex issues encounter edduring both pre-production and production stages, reducing downtime by 30%.Managed and maintained test data within AWS S3 and RDS, ensuring secure and efficient access for testing purposes.",
      logo: tcsLogo, 
      linkedin: "https://www.linkedin.com/company/tata-consultancy-services/",
    },
    {
      id: 4,
      title: "Bachelor of Engineering (B.E) – Information Technology",
      company: "Army Institute Of Technology",
      location: "Pune, India",
      dateRange: "2015 - 2019",
      description:
        "Relevant Courses: Data Structure and Algorithm • DBMS • Operating Systems. GPA 8.55/10",
      logo: aitLogo,  
      linkedin: "https://aitpune.com/",
    },
  ];

  const handleReadMore = (exp) => {
    setModalData(exp);
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false); 
  };

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`experience-item ${index % 2 === 0 ? "left" : "right"} ${
              isModalOpen ? "experience-item-dimmed" : "" 
            }`}
          >
            <div className="experience-arrow">
              <span>{index % 2 === 1 ? "→" : "←"}</span>
            </div>
            <div className="experience-content">
              <div className="icon-container">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <div className="details-container">
                <div className="details-container-title">{exp.title}</div>
                <p className="experience-company">
                  <strong>{exp.company}</strong> - {exp.location}
                </p>
                <p className="experience-date-range">{exp.dateRange}</p>
                <button
                  className="read-more-btn"
                  onClick={() => handleReadMore(exp)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img
              className="modal-logo"
              src={modalData.logo}
              alt={`${modalData.company} logo`}
            />
            <h3>{modalData.title}</h3>
            <p>
              <strong>Company:</strong> {modalData.company}
            </p>
            <p>
              <strong>Location:</strong> {modalData.location}
            </p>
            <p>
              <strong>Date:</strong> {modalData.dateRange}
            </p>
            <p>
              <strong>Description:</strong> {modalData.description}
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href={modalData.linkedin} target="_blank" rel="noopener noreferrer">
                {modalData.linkedin}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
