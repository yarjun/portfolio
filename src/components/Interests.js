import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import CodeIcon from '@mui/icons-material/Code';
import MovieIcon from '@mui/icons-material/Movie';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './Interests.css';

const Interests = () => {
  return (
    <div className="interests-container">
      <h2 className="interests-title">My Interests</h2>
      <div className="interests-box">
        <div className="interest-item">
          <FitnessCenterIcon style={{ color: '#FF5722', fontSize: '2.5rem' }} />
          <p className="interest-name">GYM</p>
        </div>
        <div className="interest-item">
          <SportsTennisIcon style={{ color: '#4CAF50', fontSize: '2.5rem' }} />
          <p className="interest-name">Squash</p>
        </div>
        <div className="interest-item">
          <CodeIcon style={{ color: '#3F51B5', fontSize: '2.5rem' }} />
          <p className="interest-name">Competitive Programming</p>
        </div>
        <div className="interest-item">
          <MovieIcon style={{ color: '#FFC107', fontSize: '2.5rem' }} />
          <p className="interest-name">Movies</p>
        </div>
        <div className="interest-item">
          <TravelExploreIcon style={{ color: '#009688', fontSize: '2.5rem' }} />
          <p className="interest-name">Traveling</p>
        </div>
      </div>
    </div>
  );
};

export default Interests;
