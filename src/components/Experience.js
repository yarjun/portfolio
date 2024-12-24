import React, { useState } from 'react';
import './Experience.css';

function Experience() {
  const [modalData, setModalData] = useState(null);

  const experiences = [
    {
      id: 1, 
      title: "Master of Science – Applied Computer Science Co-op",
      company: "Concordia University",
      location: "Montreal, QC, Canada",
      dateRange: "Sept 2023 - May 2025",
      description:
        "Relevant Courses: Programming and Problem Solving • Advanced Programming Practices • Software Design Methodologies.",
      logo: "https://via.placeholder.com/60?text=C",
      linkedin: "https://linkedin.com/school/concordia-university/",
    },
    {
      id: 2, 
      title: "UPSC - Civil Services",
      company: "Vajiram and Ravi",
      location: "Delhi, India",
      dateRange: "Apr 2021 - June 2023",
      description:
        "Completed a comprehensive preparation course at Vajiram and Ravi, Delhi, India, one of the premier IAS coaching institutions, focusing on both UPSC -CSE(Prelims and Mains).",
      logo: "https://via.placeholder.com/60?text=V",
      linkedin: "https://vajiramandravi.com/",
    },
    {
      id: 3, 
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Gurugram, India",
      dateRange: "Jul 2019 - Apr 2021",
      description:
        "Developed 'Test Automation' Application for TCS Internal Systems.",
      logo: "https://via.placeholder.com/60?text=T",
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
      logo: "https://via.placeholder.com/60?text=A",
      linkedin: "https://aitpune.com/",
    },
  ];

  const handleReadMore = (exp) => {
    setModalData(exp);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`experience-item ${index % 2 === 0 ? "left" : "right"} ${
              modalData ? "experience-item-dimmed" : "" 
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