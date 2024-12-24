import React from 'react';
import './Certificates.css';
import udemynode from '../assets/images/udemynode.jpg'; // Update with your image file extension
import iitbombayX from '../assets/images/iitbombayX.jpg'; // Update with your image file extension

const Certificates = () => {
  return (
    <div className="certificates-container">
      <div className="certificate left">
        <img src={udemynode} alt="Certificate 1" />
      </div>
      <div className="certificate right">
        <img src={iitbombayX} alt="Certificate 2" />
      </div>
    </div>
  );
};

export default Certificates;
