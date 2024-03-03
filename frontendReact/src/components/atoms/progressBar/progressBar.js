import React from 'react';
import PropTypes from 'prop-types';
import './progressBar.style.scss'; 

const ProgressBar = ({ progressFilled }) => {
  const calculateText = () => {
    let text = '';
    let textColor = '';

    if (progressFilled <= 25) {
      text = 'Stap 1/4';
      textColor = 'gray';
    } else if (progressFilled <= 50) {
      text = 'Stap 2/4';
      textColor = 'gray'; 
    } else if (progressFilled <= 75) {
      text = 'Stap 3/4';
      textColor = 'white';
    } else {
      text = 'Je bent klaar!';
      textColor = 'white'; 
    }

    return { text, textColor };
  };

  const { text, textColor } = calculateText();

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progressFilled}%` }}>
        <div className="progress-text" style={{ color: textColor }}>{text}</div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progressFilled: PropTypes.number.isRequired,
};

export default ProgressBar;
