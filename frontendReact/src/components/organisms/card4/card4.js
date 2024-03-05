import React from "react";
import PropTypes from 'prop-types';
import './_card4.style.scss';

const Card4 = ({ title, enteredData }) => {
  return (
    <div className="Card4">
      <h2 className="card-title">{title}</h2>
      <div className="entered-data">
        <ul>
          {Object.entries(enteredData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value ? (
                Object.entries(value).map(([subKey, subValue]) => (
                  <div key={subKey}>
                    <strong>{subKey}:</strong> {subValue === null ? "Not specified" : subValue}
                  </div>
                ))
              ) : "Not specified"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Card4.propTypes = {
  title: PropTypes.string.isRequired,
  enteredData: PropTypes.object.isRequired,
};

export default Card4;