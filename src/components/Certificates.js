import React from 'react';
import './Certificates.css';
import udemynode from '../assets/images/udemynode.jpg'; 
import iitbombayX from '../assets/images/iitbombayX.jpg';

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h1 className="certificates-header">Certificates</h1>
      <div className="certificates-content">
        <div className="certificate left">
          <img src={udemynode} alt="Certificate 1" />
        </div>
        <div className="certificate right">
          <img src={iitbombayX} alt="Certificate 2" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
