import React from 'react';
import { FaDumbbell, FaTrophy, FaCode, FaFilm, FaPlane } from 'react-icons/fa';
import './Interests.css';

const Interests = () => {
  return (
    <div className="interests-container">
      <h2 className="interests-title">My Interests</h2>
      <div className="interests-box">
        <div className="interest-item">
          <FaDumbbell className="interest-icon" />
          <p className="interest-name">GYM</p>
        </div>
        <div className="interest-item">
          <FaTrophy className="interest-icon" />
          <p className="interest-name">Squash</p>
        </div>
        <div className="interest-item">
          <FaCode className="interest-icon" />
          <p className="interest-name">Competitive Programming</p>
        </div>
        <div className="interest-item">
          <FaFilm className="interest-icon" />
          <p className="interest-name">Movies</p>
        </div>
        <div className="interest-item">
          <FaPlane className="interest-icon" />
          <p className="interest-name">Traveling</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
