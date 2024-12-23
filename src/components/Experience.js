import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'ABC Technologies',
      location: 'New York, NY',
      dateRange: 'Jan 2022 - Present',
      description: 'Developing and maintaining web applications using React.js, Node.js, and MongoDB.',
    },
    {
      title: 'Frontend Developer',
      company: 'XYZ Solutions',
      location: 'Los Angeles, CA',
      dateRange: 'Jun 2020 - Dec 2021',
      description: 'Built user interfaces and integrated APIs using HTML, CSS, JavaScript, and React.',
    },
    {
      title: 'Intern Developer',
      company: 'Tech Co.',
      location: 'Remote',
      dateRange: 'Jan 2020 - May 2020',
      description: 'Assisted in the development of a mobile app using React Native and collaborated in team projects.',
    },
  ];

  return (
    <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                    <div className="experience-dot"></div>
                    <div className="experience-content">
                        <h3 className="experience-title">{exp.title}</h3>
                        <p className="experience-company">
                            <strong>{exp.company}</strong> - {exp.location}
                        </p>
                        <p className="experience-date-range">{exp.dateRange}</p>
                        <p className="experience-description">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Experience;
