import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/inputfield/InputField';
import './_card3.style.scss';

const CardWithInputs = ({ title, inputValues, setInputValues, enteredData }) => {
  // Check if enteredData is defined before using Object.entries
  const enteredDataArray = enteredData ? Object.entries(enteredData) : [];

  const handleInputChange = (index, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [`input${index + 1}`]: value,
    }));
  };

  const inputPlaceholders = [
    'Voornaam',
    'Achternaam',
    'E-mailadres',
    'Telefoonnummer',
    'Adres',
    'Stad',
  ];

  return (
    <div className="Card3">
      <h2 className="card-title">{title}</h2>
      <div className="input-container">
        {inputPlaceholders.map((placeholder, index) => (
          <Input
            key={index}
            type="text"
            placeholder={placeholder}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="entered-data">
        <ul>
          {/* Use enteredDataArray instead of directly using Object.entries(enteredData) */}
          {enteredDataArray.map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CardWithInputs.propTypes = {
  title: PropTypes.string.isRequired,
  inputValues: PropTypes.object.isRequired,
  setInputValues: PropTypes.func.isRequired,
  enteredData: PropTypes.object, // No longer marked as required
};

export default CardWithInputs;